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

import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurity;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetPathParams;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetQueryParams;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetRequest;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferApplicationsGetRequest req = new DatatransferApplicationsGetRequest() {{
                security = new DatatransferApplicationsGetSecurity() {{
                    option1 = new DatatransferApplicationsGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DatatransferApplicationsGetPathParams() {{
                    applicationId = "corrupti";
                }};
                queryParams = new DatatransferApplicationsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            DatatransferApplicationsGetResponse res = sdk.applications.datatransferApplicationsGet(req);

            if (res.application.isPresent()) {
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

* `datatransferApplicationsGet` - Retrieves information about an application for the given application ID.
* `datatransferApplicationsList` - Lists the applications available for data transfer for a customer.

### transfers

* `datatransferTransfersGet` - Retrieves a data transfer request by its resource ID.
* `datatransferTransfersInsert` - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* `datatransferTransfersList` - Lists the transfers for a customer by source user, destination user, or status.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
