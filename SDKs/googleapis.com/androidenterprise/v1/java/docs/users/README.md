# users

### Available Operations

* [androidenterpriseUsersDelete](#androidenterpriseusersdelete) - Deleted an EMM-managed user.
* [androidenterpriseUsersGenerateAuthenticationToken](#androidenterpriseusersgenerateauthenticationtoken) - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
* [androidenterpriseUsersGet](#androidenterpriseusersget) - Retrieves a user's details.
* [androidenterpriseUsersGetAvailableProductSet](#androidenterpriseusersgetavailableproductset) - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseUsersInsert](#androidenterpriseusersinsert) - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
* [androidenterpriseUsersList](#androidenterpriseuserslist) - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
* [androidenterpriseUsersRevokeDeviceAccess](#androidenterpriseusersrevokedeviceaccess) - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
* [androidenterpriseUsersSetAvailableProductSet](#androidenterpriseuserssetavailableproductset) - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseUsersUpdate](#androidenterpriseusersupdate) - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

## androidenterpriseUsersDelete

Deleted an EMM-managed user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersDeleteRequest req = new AndroidenterpriseUsersDeleteRequest("beatae", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "ut";
                fields = "perspiciatis";
                key = "earum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "voluptatibus";
                uploadProtocol = "iste";
            }};            

            AndroidenterpriseUsersDeleteResponse res = sdk.users.androidenterpriseUsersDelete(req, new AndroidenterpriseUsersDeleteSecurity("itaque", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersGenerateAuthenticationToken

Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGenerateAuthenticationTokenRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGenerateAuthenticationTokenResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGenerateAuthenticationTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersGenerateAuthenticationTokenRequest req = new AndroidenterpriseUsersGenerateAuthenticationTokenRequest("nisi", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "iusto";
                key = "sit";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "officia";
                uploadProtocol = "recusandae";
            }};            

            AndroidenterpriseUsersGenerateAuthenticationTokenResponse res = sdk.users.androidenterpriseUsersGenerateAuthenticationToken(req, new AndroidenterpriseUsersGenerateAuthenticationTokenSecurity("ea", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authenticationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersGet

Retrieves a user's details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersGetRequest req = new AndroidenterpriseUsersGetRequest("voluptas", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "a";
                key = "voluptate";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "necessitatibus";
                uploadProtocol = "animi";
            }};            

            AndroidenterpriseUsersGetResponse res = sdk.users.androidenterpriseUsersGet(req, new AndroidenterpriseUsersGetSecurity("impedit", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersGetAvailableProductSet

Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetAvailableProductSetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetAvailableProductSetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersGetAvailableProductSetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersGetAvailableProductSetRequest req = new AndroidenterpriseUsersGetAvailableProductSetRequest("corporis", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "vero";
                key = "consectetur";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "dolorem";
                uploadProtocol = "ad";
            }};            

            AndroidenterpriseUsersGetAvailableProductSetResponse res = sdk.users.androidenterpriseUsersGetAvailableProductSet(req, new AndroidenterpriseUsersGetAvailableProductSetSecurity("qui", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersInsert

Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersInsertRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersInsertResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserAccountTypeEnum;
import org.openapis.openapi.models.shared.UserManagementTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersInsertRequest req = new AndroidenterpriseUsersInsertRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                user = new User() {{
                    accountIdentifier = "soluta";
                    accountType = UserAccountTypeEnum.USER_ACCOUNT;
                    displayName = "rem";
                    id = "a7202611-435e-4139-9bc2-259b1abda8c0";
                    managementType = UserManagementTypeEnum.GOOGLE_MANAGED;
                    primaryEmail = "ipsa";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "totam";
                key = "dolore";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "voluptatem";
                uploadProtocol = "autem";
            }};            

            AndroidenterpriseUsersInsertResponse res = sdk.users.androidenterpriseUsersInsert(req, new AndroidenterpriseUsersInsertSecurity("esse", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersList

Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersListRequest req = new AndroidenterpriseUsersListRequest("assumenda", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "provident";
                key = "accusamus";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "sint";
                uploadProtocol = "ea";
            }};            

            AndroidenterpriseUsersListResponse res = sdk.users.androidenterpriseUsersList(req, new AndroidenterpriseUsersListSecurity("autem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersRevokeDeviceAccess

Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersRevokeDeviceAccessRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersRevokeDeviceAccessResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersRevokeDeviceAccessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersRevokeDeviceAccessRequest req = new AndroidenterpriseUsersRevokeDeviceAccessRequest("rerum", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "at";
                key = "alias";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "fuga";
                uploadProtocol = "repudiandae";
            }};            

            AndroidenterpriseUsersRevokeDeviceAccessResponse res = sdk.users.androidenterpriseUsersRevokeDeviceAccess(req, new AndroidenterpriseUsersRevokeDeviceAccessSecurity("accusantium", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersSetAvailableProductSet

Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersSetAvailableProductSetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersSetAvailableProductSetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersSetAvailableProductSetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProductSet;
import org.openapis.openapi.models.shared.ProductSetProductSetBehaviorEnum;
import org.openapis.openapi.models.shared.ProductVisibility;
import org.openapis.openapi.models.shared.ProductVisibilityTracksEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersSetAvailableProductSetRequest req = new AndroidenterpriseUsersSetAvailableProductSetRequest("officiis", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                productSet = new ProductSet() {{
                    productId = new String[]{{
                        add("praesentium"),
                        add("odit"),
                    }};
                    productSetBehavior = ProductSetProductSetBehaviorEnum.UNKNOWN;
                    productVisibility = new org.openapis.openapi.models.shared.ProductVisibility[]{{
                        add(new ProductVisibility() {{
                            productId = "error";
                            trackIds = new String[]{{
                                add("adipisci"),
                                add("recusandae"),
                                add("similique"),
                                add("ut"),
                            }};
                            tracks = new org.openapis.openapi.models.shared.ProductVisibilityTracksEnum[]{{
                                add(ProductVisibilityTracksEnum.PRODUCTION),
                                add(ProductVisibilityTracksEnum.APP_TRACK_UNSPECIFIED),
                                add(ProductVisibilityTracksEnum.BETA),
                            }};
                        }}),
                        add(new ProductVisibility() {{
                            productId = "molestiae";
                            trackIds = new String[]{{
                                add("cupiditate"),
                                add("fugit"),
                                add("numquam"),
                                add("numquam"),
                            }};
                            tracks = new org.openapis.openapi.models.shared.ProductVisibilityTracksEnum[]{{
                                add(ProductVisibilityTracksEnum.ALPHA),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "necessitatibus";
                key = "corporis";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "voluptatum";
                uploadProtocol = "cupiditate";
            }};            

            AndroidenterpriseUsersSetAvailableProductSetResponse res = sdk.users.androidenterpriseUsersSetAvailableProductSet(req, new AndroidenterpriseUsersSetAvailableProductSetSecurity("minima", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseUsersUpdate

Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseUsersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserAccountTypeEnum;
import org.openapis.openapi.models.shared.UserManagementTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseUsersUpdateRequest req = new AndroidenterpriseUsersUpdateRequest("enim", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                user = new User() {{
                    accountIdentifier = "minus";
                    accountType = UserAccountTypeEnum.DEVICE_ACCOUNT;
                    displayName = "modi";
                    id = "54efb0b3-4896-4c3c-a5ac-fbe2fd570757";
                    managementType = UserManagementTypeEnum.GOOGLE_MANAGED;
                    primaryEmail = "excepturi";
                }};;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "ducimus";
                key = "voluptate";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "similique";
                uploadProtocol = "optio";
            }};            

            AndroidenterpriseUsersUpdateResponse res = sdk.users.androidenterpriseUsersUpdate(req, new AndroidenterpriseUsersUpdateSecurity("ex", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
