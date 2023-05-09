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
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountResponse res = sdk.account.getAccount();

            if (res.account != null) {
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


### [account](docs/account/README.md)

* [getAccount](docs/account/README.md#getaccount) - Get Account

### [captions](docs/captions/README.md)

* [getCaptions](docs/captions/README.md#getcaptions) - Get Captions

### [jobs](docs/jobs/README.md)

* [deleteJobById](docs/jobs/README.md#deletejobbyid) - Delete Job by Id
* [getJobById](docs/jobs/README.md#getjobbyid) - Get Job By Id
* [getListOfJobs](docs/jobs/README.md#getlistofjobs) - Get List of Jobs
* [submitTranscriptionJobJson](docs/jobs/README.md#submittranscriptionjobjson) - Submit Transcription Job
* [submitTranscriptionJobMultipart](docs/jobs/README.md#submittranscriptionjobmultipart) - Submit Transcription Job

### [transcript](docs/transcript/README.md)

* [getTranscriptById](docs/transcript/README.md#gettranscriptbyid) - Get Transcript By Id
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
