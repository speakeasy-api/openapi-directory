# tagKeys

### Available Operations

* [cloudresourcemanagerTagKeysCreate](#cloudresourcemanagertagkeyscreate) - Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
* [cloudresourcemanagerTagKeysGetNamespaced](#cloudresourcemanagertagkeysgetnamespaced) - Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagKeysList](#cloudresourcemanagertagkeyslist) - Lists all TagKeys for a parent resource.

## cloudresourcemanagerTagKeysCreate

Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagKeyInput;
import org.openapis.openapi.models.shared.TagKeyPurposeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagKeysCreateRequest req = new CloudresourcemanagerTagKeysCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                tagKeyInput = new TagKeyInput() {{
                    description = "sapiente";
                    etag = "amet";
                    name = "Tyler Kassulke";
                    parent = "molestiae";
                    purpose = TagKeyPurposeEnum.PURPOSE_UNSPECIFIED;
                    purposeData = new java.util.HashMap<String, String>() {{
                        put("magnam", "distinctio");
                        put("id", "labore");
                    }};
                    shortName = "labore";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "magnam";
                uploadProtocol = "et";
                validateOnly = false;
            }};            

            CloudresourcemanagerTagKeysCreateResponse res = sdk.tagKeys.cloudresourcemanagerTagKeysCreate(req, new CloudresourcemanagerTagKeysCreateSecurity("excepturi", "ullam") {{
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

## cloudresourcemanagerTagKeysGetNamespaced

Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysGetNamespacedRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysGetNamespacedResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysGetNamespacedSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysGetNamespacedSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysGetNamespacedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagKeysGetNamespacedRequest req = new CloudresourcemanagerTagKeysGetNamespacedRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                name = "Tommy Kemmer";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            CloudresourcemanagerTagKeysGetNamespacedResponse res = sdk.tagKeys.cloudresourcemanagerTagKeysGetNamespaced(req, new CloudresourcemanagerTagKeysGetNamespacedSecurity() {{
                option1 = new CloudresourcemanagerTagKeysGetNamespacedSecurityOption1("doloribus", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tagKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerTagKeysList

Lists all TagKeys for a parent resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagKeysListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagKeysListRequest req = new CloudresourcemanagerTagKeysListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "in";
                key = "architecto";
                oauthToken = "architecto";
                pageSize = 919483L;
                pageToken = "ullam";
                parent = "expedita";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "repellat";
                uploadProtocol = "quibusdam";
            }};            

            CloudresourcemanagerTagKeysListResponse res = sdk.tagKeys.cloudresourcemanagerTagKeysList(req, new CloudresourcemanagerTagKeysListSecurity() {{
                option1 = new CloudresourcemanagerTagKeysListSecurityOption1("sed", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
