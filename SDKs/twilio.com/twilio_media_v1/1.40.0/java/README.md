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

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateMediaProcessorSecurity;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaProcessorRequest req = new CreateMediaProcessorRequest() {{
                security = new CreateMediaProcessorSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateMediaProcessorCreateMediaProcessorRequest() {{
                    extension = "corrupti";
                    extensionContext = "provident";
                    extensionEnvironment = "distinctio";
                    maxDuration = 844266;
                    statusCallback = "https://tidy-mascara.org";
                    statusCallbackMethod = "POST";
                }};
            }};            

            CreateMediaProcessorResponse res = sdk.createMediaProcessor(req);

            if (res.mediaV1MediaProcessor.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createMediaProcessor`
* `createPlayerStreamer`
* `createPlayerStreamerPlaybackGrant`
* `deleteMediaRecording` - Deletes a MediaRecording resource identified by a SID.
* `fetchMediaProcessor` - Returns a single MediaProcessor resource identified by a SID.
* `fetchMediaRecording` - Returns a single MediaRecording resource identified by a SID.
* `fetchPlayerStreamer` - Returns a single PlayerStreamer resource identified by a SID.
* `fetchPlayerStreamerPlaybackGrant` - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* `listMediaProcessor` - Returns a list of MediaProcessors.
* `listMediaRecording` - Returns a list of MediaRecordings.
* `listPlayerStreamer` - Returns a list of PlayerStreamers.
* `updateMediaProcessor` - Updates a MediaProcessor resource identified by a SID.
* `updatePlayerStreamer` - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
