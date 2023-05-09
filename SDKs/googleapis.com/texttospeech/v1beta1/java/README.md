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
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechProjectsLocationsOperationsGetRequest req = new TexttospeechProjectsLocationsOperationsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            TexttospeechProjectsLocationsOperationsGetResponse res = sdk.projects.texttospeechProjectsLocationsOperationsGet(req, new TexttospeechProjectsLocationsOperationsGetSecurity("suscipit", "iure") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [texttospeechProjectsLocationsOperationsGet](docs/projects/README.md#texttospeechprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [texttospeechProjectsLocationsOperationsList](docs/projects/README.md#texttospeechprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [texttospeechProjectsLocationsSynthesizeLongAudio](docs/projects/README.md#texttospeechprojectslocationssynthesizelongaudio) - Synthesizes long form text asynchronously.

### [text](docs/text/README.md)

* [texttospeechTextSynthesize](docs/text/README.md#texttospeechtextsynthesize) - Synthesizes speech synchronously: receive results after all text input has been processed.

### [voices](docs/voices/README.md)

* [texttospeechVoicesList](docs/voices/README.md#texttospeechvoiceslist) - Returns a list of Voice supported for synthesis.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
