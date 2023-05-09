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
import org.openapis.openapi.models.operations.GetAtmsRequest;
import org.openapis.openapi.models.operations.GetAtmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAtmsRequest req = new GetAtmsRequest() {{
                ifModifiedSince = "corrupti";
                ifNoneMatch = "provident";
            }};            

            GetAtmsResponse res = sdk.atm.getAtms(req);

            if (res.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
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


### [atm](docs/atm/README.md)

* [getAtms](docs/atm/README.md#getatms) - Gets a list of all `ATM` objects.
* [headAtms](docs/atm/README.md#headatms) - Gets header information on the current set of `ATM` data

### [bca](docs/bca/README.md)

* [getBusinessCurrentAccounts](docs/bca/README.md#getbusinesscurrentaccounts) - Gets a list of all `Branch Current Account` objects.
* [headBusinessCurrentAccounts](docs/bca/README.md#headbusinesscurrentaccounts) - Gets header information on the current set of `Business Current Account` data

### [branch](docs/branch/README.md)

* [getBranches](docs/branch/README.md#getbranches) - Gets a list of all `Branch` objects.
* [headBranches](docs/branch/README.md#headbranches) - Gets header information on the current set of `Branch` data

### [ccc](docs/ccc/README.md)

* [getCommercialCreditCards](docs/ccc/README.md#getcommercialcreditcards) - Gets a list of all `Commerical Credit Card` objects.
* [headCommercialCreditCards](docs/ccc/README.md#headcommercialcreditcards) - Gets header information on the current set of `Commerical Credit Card` data

### [pca](docs/pca/README.md)

* [getPersonalCurrentAccounts](docs/pca/README.md#getpersonalcurrentaccounts) - Gets a list of all `Personal Current Account` objects.
* [headPersonalCurrentAccounts](docs/pca/README.md#headpersonalcurrentaccounts) - Gets header information on the current set of `Personal Current Account` data

### [sme](docs/sme/README.md)

* [getUnsecuredSmeLoans](docs/sme/README.md#getunsecuredsmeloans) - Gets a list of all `Unsercured SME Lending` objects.
* [headUnsecuredSmeLoans](docs/sme/README.md#headunsecuredsmeloans) - Gets header information on the current set of `Unsercured SME Lending` data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
