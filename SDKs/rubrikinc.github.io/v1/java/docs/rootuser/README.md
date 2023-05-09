# rootUser

## Overview

User management.

### Available Operations

* [generateTotpSecret](#generatetotpsecret) - Generate a TOTP secret key for the given user
* [getTotpStatus](#gettotpstatus) - Get the TOTP status for the given user
* [getUserAccountLockoutSettings](#getuseraccountlockoutsettings) - Get the local user account lockout settings
* [manageUserAccountLockoutSettings](#manageuseraccountlockoutsettings) - Update the local user account lockout settings
* [resetTotp](#resettotp) - Reset the TOTP for the given user
* [setupTotp](#setuptotp) - Configure the TOTP secret for the given user
* [unlockUser](#unlockuser) - Unlock a user account

## generateTotpSecret

Use this endpoint to generate the time-based one time password (TOTP) secret key for a specified user account. The secret is a key value encoded in Base32 and includes a URI for generating a scannable QR code.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateTotpSecretRequest;
import org.openapis.openapi.models.operations.GenerateTotpSecretResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("provident", "adipisci") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GenerateTotpSecretRequest req = new GenerateTotpSecretRequest("accusantium");            

            GenerateTotpSecretResponse res = sdk.rootUser.generateTotpSecret(req);

            if (res.totpSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotpStatus

Get the time-based one time password (TOTP) status for a specified user account. The TOTP status specifies whether that account has TOTP enabled and whether TOTP is being enforced for that account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotpStatusRequest;
import org.openapis.openapi.models.operations.GetTotpStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magnam", "repellat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetTotpStatusRequest req = new GetTotpStatusRequest("omnis");            

            GetTotpStatusResponse res = sdk.rootUser.getTotpStatus(req);

            if (res.totpStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAccountLockoutSettings

Get the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAccountLockoutSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("explicabo", "vel") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetUserAccountLockoutSettingsResponse res = sdk.rootUser.getUserAccountLockoutSettings();

            if (res.localUserAccountLockoutStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## manageUserAccountLockoutSettings

Update the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManageUserAccountLockoutSettingsResponse;
import org.openapis.openapi.models.shared.LocalUserAccountLockoutConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cum", "id") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.LocalUserAccountLockoutConfig req = new LocalUserAccountLockoutConfig() {{
                accountLockoutDurationInMinutes = 821016;
                enabled = false;
                maxFailedLoginsForLocalUser = 143061;
            }};            

            ManageUserAccountLockoutSettingsResponse res = sdk.rootUser.manageUserAccountLockoutSettings(req);

            if (res.localUserAccountLockoutStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetTotp

Reset the TOTP settings to the default disabled state for the specified user account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetTotpRequest;
import org.openapis.openapi.models.operations.ResetTotpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsam", "nostrum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ResetTotpRequest req = new ResetTotpRequest("sequi");            

            ResetTotpResponse res = sdk.rootUser.resetTotp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setupTotp

Use this endpoint to configure the time-based one time password (TOTP) secret for a specified user account. The endpoint replaces an existing secret with the new one. The Rubrik cluster checks the secret against a one time password (OTP) to ensure validity.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetupTotpRequest;
import org.openapis.openapi.models.operations.SetupTotpResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TotpConfigUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatum", "quasi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SetupTotpRequest req = new SetupTotpRequest(                new TotpConfigUpdateRequest("error", "nobis");, "tempora");            

            SetupTotpResponse res = sdk.rootUser.setupTotp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlockUser

Unlock a user account that has been locked because of too many failed login attempts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlockUserRequest;
import org.openapis.openapi.models.operations.UnlockUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptate", "eius") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnlockUserRequest req = new UnlockUserRequest("expedita");            

            UnlockUserResponse res = sdk.rootUser.unlockUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
