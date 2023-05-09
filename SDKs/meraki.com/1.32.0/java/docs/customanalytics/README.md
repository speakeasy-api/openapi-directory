# customAnalytics

### Available Operations

* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [updateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera

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
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationCameraCustomAnalyticsArtifactRequest req = new CreateOrganizationCameraCustomAnalyticsArtifactRequest("tenetur") {{
                requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody() {{
                    name = "Sylvester Kihn";
                }};;
            }};            

            CreateOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.customAnalytics.createOrganizationCameraCustomAnalyticsArtifact(req);

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
                .setSecurity(new Security("temporibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationCameraCustomAnalyticsArtifactRequest req = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest("reiciendis", "fugiat");            

            DeleteOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.customAnalytics.deleteOrganizationCameraCustomAnalyticsArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraCustomAnalyticsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraCustomAnalyticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraCustomAnalyticsRequest req = new GetDeviceCameraCustomAnalyticsRequest("ipsum");            

            GetDeviceCameraCustomAnalyticsResponse res = sdk.customAnalytics.getDeviceCameraCustomAnalytics(req);

            if (res.getDeviceCameraCustomAnalytics200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("corporis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactRequest req = new GetOrganizationCameraCustomAnalyticsArtifactRequest("tempora", "eveniet");            

            GetOrganizationCameraCustomAnalyticsArtifactResponse res = sdk.customAnalytics.getOrganizationCameraCustomAnalyticsArtifact(req);

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
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraCustomAnalyticsArtifactsRequest req = new GetOrganizationCameraCustomAnalyticsArtifactsRequest("placeat");            

            GetOrganizationCameraCustomAnalyticsArtifactsResponse res = sdk.customAnalytics.getOrganizationCameraCustomAnalyticsArtifacts(req);

            if (res.getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters;
import org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraCustomAnalyticsRequest req = new UpdateDeviceCameraCustomAnalyticsRequest("provident") {{
                requestBody = new UpdateDeviceCameraCustomAnalyticsRequestBody() {{
                    artifactId = "non";
                    enabled = false;
                    parameters = new org.openapis.openapi.models.operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters[]{{
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("voluptas", "fugit") {{
                            name = "Ms. Dora Bartell";
                            value = "quia";
                        }}),
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("quod", "laborum") {{
                            name = "Monica Reinger";
                            value = "eum";
                        }}),
                        add(new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters("eos", "voluptatum") {{
                            name = "Olive McGlynn";
                            value = "quos";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCameraCustomAnalyticsResponse res = sdk.customAnalytics.updateDeviceCameraCustomAnalytics(req);

            if (res.updateDeviceCameraCustomAnalytics200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
