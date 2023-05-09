# artifacts

### Available Operations

* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts

## createOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationCameraCustomAnalyticsArtifactRequest req = new CreateOrganizationCameraCustomAnalyticsArtifactRequest("voluptatibus") {{
                requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody() {{
                    name = "Arlene Ziemann";
                }};;
            }};            

            CreateOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.artifacts.createOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationCameraCustomAnalyticsArtifactRequest req = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest("optio", "quo");            

            DeleteOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.artifacts.deleteOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactRequest req = new GetOrganizationCameraCustomAnalyticsArtifactRequest("tempora", "libero");            

            GetOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.artifacts.getOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraCustomAnalyticsArtifactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactsRequest req = new GetOrganizationCameraCustomAnalyticsArtifactsRequest("illum");            

            GetOrganizationCameraCustomAnalyticsArtifactsResponse res = sdk.artifacts.getOrganizationCameraCustomAnalyticsArtifacts(req);

            if (res.getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
