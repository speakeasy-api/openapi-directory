# projects

### Available Operations

* [storageProjectsHmacKeysCreate](#storageprojectshmackeyscreate) - Creates a new HMAC key for the specified service account.
* [storageProjectsHmacKeysDelete](#storageprojectshmackeysdelete) - Deletes an HMAC key.
* [storageProjectsHmacKeysGet](#storageprojectshmackeysget) - Retrieves an HMAC key's metadata
* [storageProjectsHmacKeysList](#storageprojectshmackeyslist) - Retrieves a list of HMAC keys matching the criteria.
* [storageProjectsHmacKeysUpdate](#storageprojectshmackeysupdate) - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* [storageProjectsServiceAccountGet](#storageprojectsserviceaccountget) - Get the email address of this project's Google Cloud Storage service account.

## storageProjectsHmacKeysCreate

Creates a new HMAC key for the specified service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysCreateRequest;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysCreateResponse;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysCreateSecurity;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysCreateSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsHmacKeysCreateRequest req = new StorageProjectsHmacKeysCreateRequest("nulla", "magni") {{
                alt = AltEnum.JSON;
                fields = "natus";
                key = "illum";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "unde";
                userIp = "ut";
                userProject = "facere";
            }};            

            StorageProjectsHmacKeysCreateResponse res = sdk.projects.storageProjectsHmacKeysCreate(req, new StorageProjectsHmacKeysCreateSecurity() {{
                option1 = new StorageProjectsHmacKeysCreateSecurityOption1("voluptas", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.hmacKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageProjectsHmacKeysDelete

Deletes an HMAC key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteRequest;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteResponse;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteSecurity;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteSecurityOption2;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsHmacKeysDeleteRequest req = new StorageProjectsHmacKeysDeleteRequest("recusandae", "quisquam") {{
                alt = AltEnum.JSON;
                fields = "facere";
                key = "dignissimos";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "dolor";
                userIp = "sint";
                userProject = "aperiam";
            }};            

            StorageProjectsHmacKeysDeleteResponse res = sdk.projects.storageProjectsHmacKeysDelete(req, new StorageProjectsHmacKeysDeleteSecurity() {{
                option1 = new StorageProjectsHmacKeysDeleteSecurityOption1("eaque", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## storageProjectsHmacKeysGet

Retrieves an HMAC key's metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetRequest;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetResponse;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetSecurity;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetSecurityOption2;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetSecurityOption3;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsHmacKeysGetRequest req = new StorageProjectsHmacKeysGetRequest("laboriosam", "laborum") {{
                alt = AltEnum.JSON;
                fields = "autem";
                key = "assumenda";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "doloremque";
                userIp = "voluptatem";
                userProject = "alias";
            }};            

            StorageProjectsHmacKeysGetResponse res = sdk.projects.storageProjectsHmacKeysGet(req, new StorageProjectsHmacKeysGetSecurity() {{
                option1 = new StorageProjectsHmacKeysGetSecurityOption1("velit", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.hmacKeyMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageProjectsHmacKeysList

Retrieves a list of HMAC keys matching the criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListRequest;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListResponse;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListSecurity;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListSecurityOption2;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListSecurityOption3;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsHmacKeysListRequest req = new StorageProjectsHmacKeysListRequest("quis") {{
                alt = AltEnum.JSON;
                fields = "velit";
                key = "ratione";
                maxResults = 555386L;
                oauthToken = "maxime";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "cumque";
                serviceAccountEmail = "doloremque";
                showDeletedKeys = false;
                uploadType = "totam";
                userIp = "iure";
                userProject = "maiores";
            }};            

            StorageProjectsHmacKeysListResponse res = sdk.projects.storageProjectsHmacKeysList(req, new StorageProjectsHmacKeysListSecurity() {{
                option1 = new StorageProjectsHmacKeysListSecurityOption1("est", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.hmacKeysMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageProjectsHmacKeysUpdate

Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysUpdateRequest;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysUpdateResponse;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysUpdateSecurity;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsHmacKeysUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HmacKeyMetadata;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsHmacKeysUpdateRequest req = new StorageProjectsHmacKeysUpdateRequest("veritatis", "necessitatibus") {{
                hmacKeyMetadata = new HmacKeyMetadata() {{
                    accessId = "iste";
                    etag = "dicta";
                    id = "52cb3119-167b-48e3-88db-03408d6d364f";
                    kind = "tenetur";
                    projectId = "assumenda";
                    selfLink = "dolore";
                    serviceAccountEmail = "enim";
                    state = "ullam";
                    timeCreated = OffsetDateTime.parse("2022-12-29T07:00:16.197Z");
                    updated = OffsetDateTime.parse("2022-02-26T13:07:11.642Z");
                }};;
                alt = AltEnum.JSON;
                fields = "dicta";
                key = "quia";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "quibusdam";
                userIp = "numquam";
                userProject = "rem";
            }};            

            StorageProjectsHmacKeysUpdateResponse res = sdk.projects.storageProjectsHmacKeysUpdate(req, new StorageProjectsHmacKeysUpdateSecurity() {{
                option1 = new StorageProjectsHmacKeysUpdateSecurityOption1("officiis", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.hmacKeyMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageProjectsServiceAccountGet

Get the email address of this project's Google Cloud Storage service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetRequest;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetResponse;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurity;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurityOption2;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurityOption3;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurityOption4;
import org.openapis.openapi.models.operations.StorageProjectsServiceAccountGetSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageProjectsServiceAccountGetRequest req = new StorageProjectsServiceAccountGetRequest("neque") {{
                alt = AltEnum.JSON;
                fields = "corporis";
                key = "quod";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "excepturi";
                userIp = "recusandae";
                userProject = "quos";
            }};            

            StorageProjectsServiceAccountGetResponse res = sdk.projects.storageProjectsServiceAccountGet(req, new StorageProjectsServiceAccountGetSecurity() {{
                option1 = new StorageProjectsServiceAccountGetSecurityOption1("dicta", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
