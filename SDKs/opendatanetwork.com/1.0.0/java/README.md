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
import org.openapis.openapi.models.operations.CreateAMapRequest;
import org.openapis.openapi.models.operations.CreateAMapResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAMapRequest req = new CreateAMapRequest("corrupti", "provident") {{
                xAppToken = "distinctio";
                appToken = "quibusdam";
                constraint = "unde";
            }};            

            CreateAMapResponse res = sdk.createAMap(req);

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

### [SDK](docs/sdk/README.md)

* [createAMap](docs/sdk/README.md#createamap) - Create a map
* [findAllAvailableDataForSomeEntities](docs/sdk/README.md#findallavailabledataforsomeentities) - Find all available data for some entities
* [findTheRelativesOfAnEntity](docs/sdk/README.md#findtherelativesofanentity) - Find the relatives of an entity
* [getEntities](docs/sdk/README.md#getentities) - Get Entities
* [getConstraintPermutationsForEntities](docs/sdk/README.md#getconstraintpermutationsforentities) - Get constraint permutations for entities
* [getDatasets](docs/sdk/README.md#getdatasets) - Get datasets
* [getQuestions](docs/sdk/README.md#getquestions) - Get questions
* [getSuggestions](docs/sdk/README.md#getsuggestions) - Get suggestions
* [getValuesForVariables](docs/sdk/README.md#getvaluesforvariables) - Get values for variables
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
