# users

### Available Operations

* [cloudshellUsersEnvironmentsAddPublicKey](#cloudshellusersenvironmentsaddpublickey) - Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.
* [cloudshellUsersEnvironmentsAuthorize](#cloudshellusersenvironmentsauthorize) - Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.
* [cloudshellUsersEnvironmentsGet](#cloudshellusersenvironmentsget) - Gets an environment. Returns NOT_FOUND if the environment does not exist.
* [cloudshellUsersEnvironmentsRemovePublicKey](#cloudshellusersenvironmentsremovepublickey) - Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.
* [cloudshellUsersEnvironmentsStart](#cloudshellusersenvironmentsstart) - Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

## cloudshellUsersEnvironmentsAddPublicKey

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAddPublicKeyRequest;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAddPublicKeyResponse;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAddPublicKeySecurity;
import org.openapis.openapi.models.shared.AddPublicKeyRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudshellUsersEnvironmentsAddPublicKeyRequest req = new CloudshellUsersEnvironmentsAddPublicKeyRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                addPublicKeyRequest = new AddPublicKeyRequest() {{
                    key = "optio";
                }};;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            CloudshellUsersEnvironmentsAddPublicKeyResponse res = sdk.users.cloudshellUsersEnvironmentsAddPublicKey(req, new CloudshellUsersEnvironmentsAddPublicKeySecurity("ipsum", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudshellUsersEnvironmentsAuthorize

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAuthorizeRequest;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAuthorizeResponse;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsAuthorizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizeEnvironmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudshellUsersEnvironmentsAuthorizeRequest req = new CloudshellUsersEnvironmentsAuthorizeRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                authorizeEnvironmentRequest = new AuthorizeEnvironmentRequest() {{
                    accessToken = "ad";
                    expireTime = "natus";
                    idToken = "sed";
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            CloudshellUsersEnvironmentsAuthorizeResponse res = sdk.users.cloudshellUsersEnvironmentsAuthorize(req, new CloudshellUsersEnvironmentsAuthorizeSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudshellUsersEnvironmentsGet

Gets an environment. Returns NOT_FOUND if the environment does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsGetRequest;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsGetResponse;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudshellUsersEnvironmentsGetRequest req = new CloudshellUsersEnvironmentsGetRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                filter = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                pageSize = 210382L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            CloudshellUsersEnvironmentsGetResponse res = sdk.users.cloudshellUsersEnvironmentsGet(req, new CloudshellUsersEnvironmentsGetSecurity("omnis", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudshellUsersEnvironmentsRemovePublicKey

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsRemovePublicKeyRequest;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsRemovePublicKeyResponse;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsRemovePublicKeySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemovePublicKeyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudshellUsersEnvironmentsRemovePublicKeyRequest req = new CloudshellUsersEnvironmentsRemovePublicKeyRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                removePublicKeyRequest = new RemovePublicKeyRequest() {{
                    key = "accusantium";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "culpa";
                uploadProtocol = "consequuntur";
            }};            

            CloudshellUsersEnvironmentsRemovePublicKeyResponse res = sdk.users.cloudshellUsersEnvironmentsRemovePublicKey(req, new CloudshellUsersEnvironmentsRemovePublicKeySecurity("repellat", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudshellUsersEnvironmentsStart

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsStartRequest;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsStartResponse;
import org.openapis.openapi.models.operations.CloudshellUsersEnvironmentsStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartEnvironmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudshellUsersEnvironmentsStartRequest req = new CloudshellUsersEnvironmentsStartRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                startEnvironmentRequest = new StartEnvironmentRequest() {{
                    accessToken = "commodi";
                    publicKeys = new String[]{{
                        add("molestiae"),
                        add("velit"),
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            CloudshellUsersEnvironmentsStartResponse res = sdk.users.cloudshellUsersEnvironmentsStart(req, new CloudshellUsersEnvironmentsStartSecurity("sequi", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
