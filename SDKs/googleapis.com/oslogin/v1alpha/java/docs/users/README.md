# users

### Available Operations

* [osloginUsersGetLoginProfile](#osloginusersgetloginprofile) - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* [osloginUsersImportSshPublicKey](#osloginusersimportsshpublickey) - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* [osloginUsersSshPublicKeysCreate](#osloginuserssshpublickeyscreate) - Create an SSH public key
* [osloginUsersSshPublicKeysDelete](#osloginuserssshpublickeysdelete) - Deletes an SSH public key.
* [osloginUsersSshPublicKeysGet](#osloginuserssshpublickeysget) - Retrieves an SSH public key.
* [osloginUsersSshPublicKeysPatch](#osloginuserssshpublickeyspatch) - Updates an SSH public key and returns the profile information. This method supports patch semantics.

## osloginUsersGetLoginProfile

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileRequest;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileResponse;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurity;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption2;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption3;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption4;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersGetLoginProfileRequest req = new OsloginUsersGetLoginProfileRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                operatingSystemType = OsloginUsersGetLoginProfileOperatingSystemTypeEnum.LINUX;
                prettyPrint = false;
                projectId = "recusandae";
                quotaUser = "temporibus";
                systemId = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
                view = OsloginUsersGetLoginProfileViewEnum.BASIC;
            }};            

            OsloginUsersGetLoginProfileResponse res = sdk.users.osloginUsersGetLoginProfile(req, new OsloginUsersGetLoginProfileSecurity() {{
                option1 = new OsloginUsersGetLoginProfileSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.loginProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osloginUsersImportSshPublicKey

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeyRequest;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeyResponse;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeySecurity;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeySecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeySecurityOption2;
import org.openapis.openapi.models.operations.OsloginUsersImportSshPublicKeyViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SshPublicKeyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersImportSshPublicKeyRequest req = new OsloginUsersImportSshPublicKeyRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "quo";
                    key = "odit";
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                projectId = "esse";
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
                view = OsloginUsersImportSshPublicKeyViewEnum.LOGIN_PROFILE_VIEW_UNSPECIFIED;
            }};            

            OsloginUsersImportSshPublicKeyResponse res = sdk.users.osloginUsersImportSshPublicKey(req, new OsloginUsersImportSshPublicKeySecurity() {{
                option1 = new OsloginUsersImportSshPublicKeySecurityOption1("nam", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.importSshPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osloginUsersSshPublicKeysCreate

Create an SSH public key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysCreateRequest;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysCreateResponse;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysCreateSecurity;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysCreateSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SshPublicKeyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersSshPublicKeysCreateRequest req = new OsloginUsersSshPublicKeysCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "deleniti";
                    key = "hic";
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            OsloginUsersSshPublicKeysCreateResponse res = sdk.users.osloginUsersSshPublicKeysCreate(req, new OsloginUsersSshPublicKeysCreateSecurity() {{
                option1 = new OsloginUsersSshPublicKeysCreateSecurityOption1("esse", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sshPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osloginUsersSshPublicKeysDelete

Deletes an SSH public key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteRequest;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteResponse;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteSecurity;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersSshPublicKeysDeleteRequest req = new OsloginUsersSshPublicKeysDeleteRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                operatingSystemType = OsloginUsersSshPublicKeysDeleteOperatingSystemTypeEnum.LINUX;
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            OsloginUsersSshPublicKeysDeleteResponse res = sdk.users.osloginUsersSshPublicKeysDelete(req, new OsloginUsersSshPublicKeysDeleteSecurity() {{
                option1 = new OsloginUsersSshPublicKeysDeleteSecurityOption1("fuga", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osloginUsersSshPublicKeysGet

Retrieves an SSH public key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysGetRequest;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysGetResponse;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysGetSecurity;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysGetSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersSshPublicKeysGetRequest req = new OsloginUsersSshPublicKeysGetRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            OsloginUsersSshPublicKeysGetResponse res = sdk.users.osloginUsersSshPublicKeysGet(req, new OsloginUsersSshPublicKeysGetSecurity() {{
                option1 = new OsloginUsersSshPublicKeysGetSecurityOption1("dolores", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sshPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osloginUsersSshPublicKeysPatch

Updates an SSH public key and returns the profile information. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysPatchRequest;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysPatchResponse;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysPatchSecurity;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysPatchSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersSshPublicKeysPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SshPublicKeyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersSshPublicKeysPatchRequest req = new OsloginUsersSshPublicKeysPatchRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "nobis";
                    key = "enim";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                updateMask = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            OsloginUsersSshPublicKeysPatchResponse res = sdk.users.osloginUsersSshPublicKeysPatch(req, new OsloginUsersSshPublicKeysPatchSecurity() {{
                option1 = new OsloginUsersSshPublicKeysPatchSecurityOption1("mollitia", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sshPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
