# tagBindings

### Available Operations

* [cloudresourcemanagerTagBindingsCreate](#cloudresourcemanagertagbindingscreate) - Creates a TagBinding between a TagValue and a Google Cloud resource.
* [cloudresourcemanagerTagBindingsList](#cloudresourcemanagertagbindingslist) - Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

## cloudresourcemanagerTagBindingsCreate

Creates a TagBinding between a TagValue and a Google Cloud resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagBindingInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagBindingsCreateRequest req = new CloudresourcemanagerTagBindingsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                tagBindingInput = new TagBindingInput() {{
                    parent = "sint";
                    tagValue = "officia";
                    tagValueNamespacedName = "dolor";
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
                validateOnly = false;
            }};            

            CloudresourcemanagerTagBindingsCreateResponse res = sdk.tagBindings.cloudresourcemanagerTagBindingsCreate(req, new CloudresourcemanagerTagBindingsCreateSecurity("magnam", "cumque") {{
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

## cloudresourcemanagerTagBindingsList

Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagBindingsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagBindingsListRequest req = new CloudresourcemanagerTagBindingsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                pageSize = 313218L;
                pageToken = "accusamus";
                parent = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            CloudresourcemanagerTagBindingsListResponse res = sdk.tagBindings.cloudresourcemanagerTagBindingsList(req, new CloudresourcemanagerTagBindingsListSecurity() {{
                option1 = new CloudresourcemanagerTagBindingsListSecurityOption1("id", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
