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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdPathParams;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdRequest;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerToken = new SchemeBearerToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            GetApplicationsApplicationIdRequest req = new GetApplicationsApplicationIdRequest() {{
                pathParams = new GetApplicationsApplicationIdPathParams() {{
                    applicationId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
            }};            

            GetApplicationsApplicationIdResponse res = sdk.applications.getApplicationsApplicationId(req);

            if (res.getApplicationsApplicationId200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applications

* `getApplicationsApplicationId` - /applications/{application_id}
* `postApplications` - /applications
* `putApplicationsApplicationId` - /applications/{application_id}

### auth

* `postAuthToken` - /auth/token

### classifications

* `getClassifications` - /classifications/naics_index_entries

### coverageParameters

* `getCoverageParameters` - /coverage_parameters

### files

* `getFilesFileId` - /files/{file_id}
* `postFilesFileIdGetTemporaryLink` - /files/{file_id}/get_temporary_link

### institutions

* `getInstitutions` - /institutions

### policies

* `getPoliciesPolicyId` - /policies/{policy_id}
* `postPolicies` - /policies

### producers

* `getProducers` - /producers

### products

* `getProducts` - /products

### quotes

* `getQuotesQuoteId` - /quotes/{quote_id}

### riskParameters

* `getRiskParameters` - /risk_parameters

### submissions

* `getSubmissionsSubmissionId` - /submissions/{submission_id}
* `postSubmissions` - /submissions

### welcomeAndHealthCheck

* `get` - /
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
