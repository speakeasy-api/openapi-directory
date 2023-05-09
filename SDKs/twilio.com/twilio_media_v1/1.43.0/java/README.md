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
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateMediaProcessorResponse;
import org.openapis.openapi.models.operations.CreateMediaProcessorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaProcessorCreateMediaProcessorRequest req = new CreateMediaProcessorCreateMediaProcessorRequest("corrupti", "provident") {{
                extensionEnvironment = "distinctio";
                maxDuration = 844266L;
                statusCallback = "https://tidy-mascara.org";
                statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum.POST;
            }};            

            CreateMediaProcessorResponse res = sdk.createMediaProcessor(req, new CreateMediaProcessorSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor != null) {
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

### [SDK](docs/sdk/README.md)

* [createMediaProcessor](docs/sdk/README.md#createmediaprocessor)
* [createPlayerStreamer](docs/sdk/README.md#createplayerstreamer)
* [createPlayerStreamerPlaybackGrant](docs/sdk/README.md#createplayerstreamerplaybackgrant)
* [deleteMediaRecording](docs/sdk/README.md#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [fetchMediaProcessor](docs/sdk/README.md#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [fetchMediaRecording](docs/sdk/README.md#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [fetchPlayerStreamer](docs/sdk/README.md#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [fetchPlayerStreamerPlaybackGrant](docs/sdk/README.md#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [listMediaProcessor](docs/sdk/README.md#listmediaprocessor) - Returns a list of MediaProcessors.
* [listMediaRecording](docs/sdk/README.md#listmediarecording) - Returns a list of MediaRecordings.
* [listPlayerStreamer](docs/sdk/README.md#listplayerstreamer) - Returns a list of PlayerStreamers.
* [updateMediaProcessor](docs/sdk/README.md#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [updatePlayerStreamer](docs/sdk/README.md#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
