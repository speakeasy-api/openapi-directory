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
import org.openapis.openapi.models.operations.SpeechOperationsGetRequest;
import org.openapis.openapi.models.operations.SpeechOperationsGetResponse;
import org.openapis.openapi.models.operations.SpeechOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechOperationsGetRequest req = new SpeechOperationsGetRequest("corrupti") {{
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

            SpeechOperationsGetResponse res = sdk.operations.speechOperationsGet(req, new SpeechOperationsGetSecurity("suscipit", "iure") {{
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


### [operations](docs/operations/README.md)

* [speechOperationsGet](docs/operations/README.md#speechoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [speechOperationsList](docs/operations/README.md#speechoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### [projects](docs/projects/README.md)

* [speechProjectsLocationsCustomClassesCreate](docs/projects/README.md#speechprojectslocationscustomclassescreate) - Create a custom class.
* [speechProjectsLocationsCustomClassesList](docs/projects/README.md#speechprojectslocationscustomclasseslist) - List custom classes.
* [speechProjectsLocationsPhraseSetsCreate](docs/projects/README.md#speechprojectslocationsphrasesetscreate) - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
* [speechProjectsLocationsPhraseSetsDelete](docs/projects/README.md#speechprojectslocationsphrasesetsdelete) - Delete a phrase set.
* [speechProjectsLocationsPhraseSetsGet](docs/projects/README.md#speechprojectslocationsphrasesetsget) - Get a phrase set.
* [speechProjectsLocationsPhraseSetsList](docs/projects/README.md#speechprojectslocationsphrasesetslist) - List phrase sets.
* [speechProjectsLocationsPhraseSetsPatch](docs/projects/README.md#speechprojectslocationsphrasesetspatch) - Update a phrase set.

### [speech](docs/speech/README.md)

* [speechSpeechLongrunningrecognize](docs/speech/README.md#speechspeechlongrunningrecognize) - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
* [speechSpeechRecognize](docs/speech/README.md#speechspeechrecognize) - Performs synchronous speech recognition: receive results after all audio has been sent and processed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
