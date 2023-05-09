# users

### Available Operations

* [sqlUsersDelete](#sqlusersdelete) - Deletes a user from a Cloud SQL instance.
* [sqlUsersGet](#sqlusersget) - Retrieves a resource containing information about a user.
* [sqlUsersInsert](#sqlusersinsert) - Creates a new user in a Cloud SQL instance.
* [sqlUsersList](#sqluserslist) - Lists users in the specified Cloud SQL instance.
* [sqlUsersUpdate](#sqlusersupdate) - Updates an existing user in a Cloud SQL instance.

## sqlUsersDelete

Deletes a user from a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlUsersDeleteRequest;
import org.openapis.openapi.models.operations.SqlUsersDeleteResponse;
import org.openapis.openapi.models.operations.SqlUsersDeleteSecurity;
import org.openapis.openapi.models.operations.SqlUsersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlUsersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlUsersDeleteRequest req = new SqlUsersDeleteRequest("esse", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "eum";
                host = "vel";
                key = "voluptatum";
                name = "Annette Bernier";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "recusandae";
                uploadProtocol = "consequuntur";
            }};            

            SqlUsersDeleteResponse res = sdk.users.sqlUsersDelete(req, new SqlUsersDeleteSecurity() {{
                option1 = new SqlUsersDeleteSecurityOption1("voluptatem", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlUsersGet

Retrieves a resource containing information about a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlUsersGetRequest;
import org.openapis.openapi.models.operations.SqlUsersGetResponse;
import org.openapis.openapi.models.operations.SqlUsersGetSecurity;
import org.openapis.openapi.models.operations.SqlUsersGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlUsersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlUsersGetRequest req = new SqlUsersGetRequest("necessitatibus", "quasi", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "harum";
                fields = "sequi";
                host = "doloribus";
                key = "repudiandae";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "nemo";
                uploadProtocol = "voluptate";
            }};            

            SqlUsersGetResponse res = sdk.users.sqlUsersGet(req, new SqlUsersGetSecurity() {{
                option1 = new SqlUsersGetSecurityOption1("blanditiis", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlUsersInsert

Creates a new user in a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlUsersInsertRequest;
import org.openapis.openapi.models.operations.SqlUsersInsertResponse;
import org.openapis.openapi.models.operations.SqlUsersInsertSecurity;
import org.openapis.openapi.models.operations.SqlUsersInsertSecurityOption1;
import org.openapis.openapi.models.operations.SqlUsersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PasswordStatus;
import org.openapis.openapi.models.shared.SqlServerUserDetails;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserDualPasswordTypeEnum;
import org.openapis.openapi.models.shared.UserPasswordValidationPolicy;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlUsersInsertRequest req = new SqlUsersInsertRequest("voluptas", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                user = new User() {{
                    dualPasswordType = UserDualPasswordTypeEnum.NO_DUAL_PASSWORD;
                    etag = "eius";
                    host = "aspernatur";
                    instance = "ducimus";
                    kind = "nesciunt";
                    name = "Ms. Armando Gottlieb";
                    password = "dicta";
                    passwordPolicy = new UserPasswordValidationPolicy() {{
                        allowedFailedAttempts = 395544;
                        enableFailedAttemptsCheck = false;
                        enablePasswordVerification = false;
                        passwordExpirationDuration = "consequuntur";
                        status = new PasswordStatus() {{
                            locked = false;
                            passwordExpirationTime = "consectetur";
                        }};;
                    }};;
                    project = "aperiam";
                    sqlserverUserDetails = new SqlServerUserDetails() {{
                        disabled = false;
                        serverRoles = new String[]{{
                            add("reiciendis"),
                            add("soluta"),
                            add("alias"),
                        }};
                    }};;
                    type = UserTypeEnum.CLOUD_IAM_USER;
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "magni";
                key = "inventore";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "voluptatibus";
                uploadProtocol = "distinctio";
            }};            

            SqlUsersInsertResponse res = sdk.users.sqlUsersInsert(req, new SqlUsersInsertSecurity() {{
                option1 = new SqlUsersInsertSecurityOption1("omnis", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlUsersList

Lists users in the specified Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlUsersListRequest;
import org.openapis.openapi.models.operations.SqlUsersListResponse;
import org.openapis.openapi.models.operations.SqlUsersListSecurity;
import org.openapis.openapi.models.operations.SqlUsersListSecurityOption1;
import org.openapis.openapi.models.operations.SqlUsersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlUsersListRequest req = new SqlUsersListRequest("minima", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "quos";
                fields = "commodi";
                key = "itaque";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            SqlUsersListResponse res = sdk.users.sqlUsersList(req, new SqlUsersListSecurity() {{
                option1 = new SqlUsersListSecurityOption1("nam", "vero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlUsersUpdate

Updates an existing user in a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlUsersUpdateRequest;
import org.openapis.openapi.models.operations.SqlUsersUpdateResponse;
import org.openapis.openapi.models.operations.SqlUsersUpdateSecurity;
import org.openapis.openapi.models.operations.SqlUsersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.SqlUsersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PasswordStatus;
import org.openapis.openapi.models.shared.SqlServerUserDetails;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserDualPasswordTypeEnum;
import org.openapis.openapi.models.shared.UserPasswordValidationPolicy;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlUsersUpdateRequest req = new SqlUsersUpdateRequest("voluptatem", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                user = new User() {{
                    dualPasswordType = UserDualPasswordTypeEnum.DUAL_PASSWORD_TYPE_UNSPECIFIED;
                    etag = "quasi";
                    host = "non";
                    instance = "maiores";
                    kind = "enim";
                    name = "Orville Nolan";
                    password = "reprehenderit";
                    passwordPolicy = new UserPasswordValidationPolicy() {{
                        allowedFailedAttempts = 667715;
                        enableFailedAttemptsCheck = false;
                        enablePasswordVerification = false;
                        passwordExpirationDuration = "quis";
                        status = new PasswordStatus() {{
                            locked = false;
                            passwordExpirationTime = "sint";
                        }};;
                    }};;
                    project = "accusamus";
                    sqlserverUserDetails = new SqlServerUserDetails() {{
                        disabled = false;
                        serverRoles = new String[]{{
                            add("hic"),
                            add("necessitatibus"),
                            add("asperiores"),
                            add("ex"),
                        }};
                    }};;
                    type = UserTypeEnum.CLOUD_IAM_USER;
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "minus";
                host = "fuga";
                key = "laborum";
                name = "Shannon Lind";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "repudiandae";
                uploadProtocol = "nam";
            }};            

            SqlUsersUpdateResponse res = sdk.users.sqlUsersUpdate(req, new SqlUsersUpdateSecurity() {{
                option1 = new SqlUsersUpdateSecurityOption1("dolore", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
