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
import org.openapis.openapi.models.operations.GetFamilyDetailsRequest;
import org.openapis.openapi.models.operations.GetFamilyDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFamilyDetailsRequest req = new GetFamilyDetailsRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                id = "{family_id}";
            }};            

            GetFamilyDetailsResponse res = sdk.languageModelDirectAccess.getFamilyDetails(req);

            if (res.getFamilyDetails200ApplicationJSONObject != null) {
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


### [languageModelDirectAccess](docs/languagemodeldirectaccess/README.md)

* [getFamilyDetails](docs/languagemodeldirectaccess/README.md#getfamilydetails) - Get family details
* [listFeatureValues](docs/languagemodeldirectaccess/README.md#listfeaturevalues) - List feature values
* [listHypernyms](docs/languagemodeldirectaccess/README.md#listhypernyms) - List hypernyms
* [listHyponyms](docs/languagemodeldirectaccess/README.md#listhyponyms) - List hyponyms
* [listInflectedForms](docs/languagemodeldirectaccess/README.md#listinflectedforms) - List inflected forms
* [listWordSenses](docs/languagemodeldirectaccess/README.md#listwordsenses) - List word senses
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
