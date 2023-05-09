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

            OsloginUsersGetLoginProfileRequest req = new OsloginUsersGetLoginProfileRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                projectId = "excepturi";
                quotaUser = "nisi";
                systemId = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
                view = OsloginUsersGetLoginProfileViewEnum.BASIC;
            }};            

            OsloginUsersGetLoginProfileResponse res = sdk.users.osloginUsersGetLoginProfile(req, new OsloginUsersGetLoginProfileSecurity() {{
                option1 = new OsloginUsersGetLoginProfileSecurityOption1("veritatis", "deserunt") {{
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

            OsloginUsersImportSshPublicKeyRequest req = new OsloginUsersImportSshPublicKeyRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "repellendus";
                    key = "sapiente";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                projectId = "quod";
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
                view = OsloginUsersImportSshPublicKeyViewEnum.SECURITY_KEY;
            }};            

            OsloginUsersImportSshPublicKeyResponse res = sdk.users.osloginUsersImportSshPublicKey(req, new OsloginUsersImportSshPublicKeySecurity() {{
                option1 = new OsloginUsersImportSshPublicKeySecurityOption1("dolorum", "dicta") {{
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

            OsloginUsersSshPublicKeysCreateRequest req = new OsloginUsersSshPublicKeysCreateRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "occaecati";
                    key = "fugit";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            OsloginUsersSshPublicKeysCreateResponse res = sdk.users.osloginUsersSshPublicKeysCreate(req, new OsloginUsersSshPublicKeysCreateSecurity() {{
                option1 = new OsloginUsersSshPublicKeysCreateSecurityOption1("impedit", "cum") {{
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

            OsloginUsersSshPublicKeysDeleteRequest req = new OsloginUsersSshPublicKeysDeleteRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            OsloginUsersSshPublicKeysDeleteResponse res = sdk.users.osloginUsersSshPublicKeysDelete(req, new OsloginUsersSshPublicKeysDeleteSecurity() {{
                option1 = new OsloginUsersSshPublicKeysDeleteSecurityOption1("laboriosam", "hic") {{
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

            OsloginUsersSshPublicKeysGetRequest req = new OsloginUsersSshPublicKeysGetRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
            }};            

            OsloginUsersSshPublicKeysGetResponse res = sdk.users.osloginUsersSshPublicKeysGet(req, new OsloginUsersSshPublicKeysGetSecurity() {{
                option1 = new OsloginUsersSshPublicKeysGetSecurityOption1("est", "mollitia") {{
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

            OsloginUsersSshPublicKeysPatchRequest req = new OsloginUsersSshPublicKeysPatchRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                sshPublicKeyInput = new SshPublicKeyInput() {{
                    expirationTimeUsec = "dolorem";
                    key = "corporis";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                updateMask = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            OsloginUsersSshPublicKeysPatchResponse res = sdk.users.osloginUsersSshPublicKeysPatch(req, new OsloginUsersSshPublicKeysPatchSecurity() {{
                option1 = new OsloginUsersSshPublicKeysPatchSecurityOption1("doloribus", "sapiente") {{
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
