# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEventsV3SendResponse;
import org.openapis.openapi.models.operations.PostEventsV3SendSecurity;
import org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest req = new BehavioralEventHttpCompletionRequest("corrupti",                 new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}) {{
                email = "Linda.Oberbrunner@yahoo.com";
                objectId = "magnam";
                occurredAt = OffsetDateTime.parse("2022-10-30T21:34:57.850Z");
                utk = "delectus";
            }};            

            PostEventsV3SendResponse res = sdk.behavioralEventsTracking.postEventsV3Send(req, new PostEventsV3SendSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [behavioralEventsTracking](docs/behavioraleventstracking/README.md)

* [postEventsV3Send](docs/behavioraleventstracking/README.md#posteventsv3send) - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
