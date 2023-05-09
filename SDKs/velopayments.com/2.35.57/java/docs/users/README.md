# users

### Available Operations

* [deleteUserByIdV2](#deleteuserbyidv2) - Delete a User
* [disableUserV2](#disableuserv2) - Disable a User
* [enableUserV2](#enableuserv2) - Enable a User
* [getSelf](#getself) - Get Self
* [getUserByIdV2](#getuserbyidv2) - Get User
* [inviteUser](#inviteuser) - Invite a User
* [listUsers](#listusers) - List Users
* [registerSms](#registersms) - Register SMS Number
* [resendToken](#resendtoken) - Resend a token
* [roleUpdate](#roleupdate) - Update User Role
* [unlockUserV2](#unlockuserv2) - Unlock a User
* [unregisterMFA](#unregistermfa) - Unregister MFA for the user
* [unregisterMFAForSelf](#unregistermfaforself) - Unregister MFA for Self
* [updatePasswordSelf](#updatepasswordself) - Update Password for self
* [userDetailsUpdate](#userdetailsupdate) - Update User Details
* [userDetailsUpdateForSelf](#userdetailsupdateforself) - Update User Details for self
* [validatePasswordSelf](#validatepasswordself) - Validate the proposed password

## deleteUserByIdV2

Delete User by Id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserByIdV2Request;
import org.openapis.openapi.models.operations.DeleteUserByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteUserByIdV2Request req = new DeleteUserByIdV2Request("2ecfcc8f-8950-410f-9dd3-d6fa1804e54c");            

            DeleteUserByIdV2Response res = sdk.users.deleteUserByIdV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableUserV2

<p>If a user is enabled this endpoint will disable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot disable themself </p>
<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableUserV2Request;
import org.openapis.openapi.models.operations.DisableUserV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DisableUserV2Request req = new DisableUserV2Request("2f168a36-3c88-473e-8843-80b1f6b8ca27");            

            DisableUserV2Response res = sdk.users.disableUserV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableUserV2

<p>If a user has been disabled this endpoints will enable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot enable themself </p>
<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableUserV2Request;
import org.openapis.openapi.models.operations.EnableUserV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            EnableUserV2Request req = new EnableUserV2Request("a60a04c4-95cc-4699-971b-51c1bdb1cf4b");            

            EnableUserV2Response res = sdk.users.enableUserV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSelf

Get the user's details


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSelfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSelfResponse res = sdk.users.getSelf();

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserByIdV2

Get a Single User by Id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserByIdV2Request;
import org.openapis.openapi.models.operations.GetUserByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserByIdV2Request req = new GetUserByIdV2Request("8ebdfc4c-cca9-49bc-bfc0-b2dce10873e4");            

            GetUserByIdV2Response res = sdk.users.getUserByIdV2(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inviteUser

Create a User and invite them to the system


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InviteUserResponse;
import org.openapis.openapi.models.shared.InviteUserRequest;
import org.openapis.openapi.models.shared.InviteUserRequestMfaTypeEnum;
import org.openapis.openapi.models.shared.InviteUserRequestUserTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.InviteUserRequest req = new InviteUserRequest("foo@example.com", InviteUserRequestMfaTypeEnum.TOTP, "11235555555",                 new String[]{{
                                add("doloremque"),
                                add("voluptatem"),
                                add("eum"),
                            }}, "11235555555") {{
                entityId = "7fffa261-ac68-49e6-b605-d24a444d9206";
                firstName = "John";
                lastName = "Doe";
                secondaryContactNumber = "11235555550";
                userType = InviteUserRequestUserTypeEnum.PAYEE;
                verificationCode = "123456";
            }};            

            InviteUserResponse res = sdk.users.inviteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsers

Get a paginated response listing the Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersRequest;
import org.openapis.openapi.models.operations.ListUsersResponse;
import org.openapis.openapi.models.shared.PayeeTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserStatusEnum;
import org.openapis.openapi.models.shared.UserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListUsersRequest req = new ListUsersRequest() {{
                entityId = "678878ba-8581-4a58-a08c-54fefa9c95f2";
                page = 887284;
                pageSize = 651467;
                payeeType = PayeeTypeEnum.COMPANY;
                sort = "cumque";
                status = UserStatusEnum.ENABLED;
                type = UserTypeEnum.PAYOR;
            }};            

            ListUsersResponse res = sdk.users.listUsers(req);

            if (res.pagedUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerSms

<p>Register an Sms number and send an OTP to it </p>
<p>Used for manual verification of a user </p>
<p>The backoffice user initiates the request to send the OTP to the user's sms </p>
<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterSmsResponse;
import org.openapis.openapi.models.shared.RegisterSmsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RegisterSmsRequest req = new RegisterSmsRequest("11235555555");            

            RegisterSmsResponse res = sdk.users.registerSms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendToken

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendTokenRequest;
import org.openapis.openapi.models.operations.ResendTokenResponse;
import org.openapis.openapi.models.shared.ResendTokenRequest;
import org.openapis.openapi.models.shared.ResendTokenRequestTokenTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResendTokenRequest req = new ResendTokenRequest(                new ResendTokenRequest(ResendTokenRequestTokenTypeEnum.INVITE_MFA_USER) {{
                                verificationCode = "123456";
                            }};, "65d307cf-ee81-4206-a281-3fa4a41c480d");            

            ResendTokenResponse res = sdk.users.resendToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roleUpdate

<p>Update the user's Role</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoleUpdateRequest;
import org.openapis.openapi.models.operations.RoleUpdateResponse;
import org.openapis.openapi.models.shared.RoleUpdateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RoleUpdateRequest req = new RoleUpdateRequest(                new RoleUpdateRequest(                new String[]{{
                                                add("aspernatur"),
                                                add("inventore"),
                                                add("sequi"),
                                                add("fugit"),
                                            }}) {{
                                verificationCode = "123456";
                            }};, "af03102d-514f-44cc-af18-bf9621a6a4f7");            

            RoleUpdateResponse res = sdk.users.roleUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlockUserV2

If a user is locked this endpoint will unlock them


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlockUserV2Request;
import org.openapis.openapi.models.operations.UnlockUserV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnlockUserV2Request req = new UnlockUserV2Request("a87ee3e4-be75-42c6-9b34-418e3bb91c8d");            

            UnlockUserV2Response res = sdk.users.unlockUserV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unregisterMFA

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnregisterMFARequest;
import org.openapis.openapi.models.operations.UnregisterMFAResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnregisterMFARequest;
import org.openapis.openapi.models.shared.UnregisterMFARequestMFATypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnregisterMFARequest req = new UnregisterMFARequest(                new UnregisterMFARequest(UnregisterMFARequestMFATypeEnum.TOTP) {{
                                verificationCode = "123456";
                            }};, "75e0e841-9d8f-484f-944f-3e07edcc4aa5");            

            UnregisterMFAResponse res = sdk.users.unregisterMFA(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unregisterMFAForSelf

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnregisterMFAForSelfRequest;
import org.openapis.openapi.models.operations.UnregisterMFAForSelfResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfMFATypeUnregisterRequest;
import org.openapis.openapi.models.shared.SelfMFATypeUnregisterRequestMFATypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnregisterMFAForSelfRequest req = new UnregisterMFAForSelfRequest(                new SelfMFATypeUnregisterRequest(SelfMFATypeUnregisterRequestMFATypeEnum.TOTP);) {{
                authorization = "sequi";
            }};            

            UnregisterMFAForSelfResponse res = sdk.users.unregisterMFAForSelf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePasswordSelf

Update password for self


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePasswordSelfResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfUpdatePasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SelfUpdatePasswordRequest req = new SelfUpdatePasswordRequest("My_new_password", "My_current_password");            

            UpdatePasswordSelfResponse res = sdk.users.updatePasswordSelf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDetailsUpdate

<p>Update the profile details for the given user</p>
<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDetailsUpdateRequest;
import org.openapis.openapi.models.operations.UserDetailsUpdateResponse;
import org.openapis.openapi.models.shared.MFATypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserDetailsUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UserDetailsUpdateRequest req = new UserDetailsUpdateRequest(                new UserDetailsUpdateRequest() {{
                                email = "foo@example.com";
                                firstName = "John";
                                lastName = "Doe";
                                mfaType = MFATypeEnum.TOTP;
                                primaryContactNumber = "11235555555";
                                secondaryContactNumber = "11235555550";
                                smsNumber = "11235555555";
                                verificationCode = "123456";
                            }};, "bd905a97-2e05-4672-8227-b2d309470bf7");            

            UserDetailsUpdateResponse res = sdk.users.userDetailsUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDetailsUpdateForSelf

<p>Update the profile details for the given user</p>
<p>Only Payee user types are supported</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDetailsUpdateForSelfResponse;
import org.openapis.openapi.models.shared.PayeeUserSelfUpdateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PayeeUserSelfUpdateRequest req = new PayeeUserSelfUpdateRequest() {{
                email = "foo@example.com";
                firstName = "John";
                lastName = "Doe";
                primaryContactNumber = "11235555555";
                secondaryContactNumber = "11235555550";
                smsNumber = "11235555555";
            }};            

            UserDetailsUpdateForSelfResponse res = sdk.users.userDetailsUpdateForSelf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validatePasswordSelf

validate the password and return a score


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidatePasswordSelfResponse;
import org.openapis.openapi.models.shared.PasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PasswordRequest req = new PasswordRequest("My_strong_password");            

            ValidatePasswordSelfResponse res = sdk.users.validatePasswordSelf(req);

            if (res.validatePasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
