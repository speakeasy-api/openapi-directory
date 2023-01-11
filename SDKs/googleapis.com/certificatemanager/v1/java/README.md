# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest() {{
                security = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    certificateIssuanceConfigId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "debitis";
                        }};
                    }};
                    description = "voluptatum";
                    keyAlgorithm = "KEY_ALGORITHM_UNSPECIFIED";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorem", "et");
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    lifetime = "dolores";
                    name = "illum";
                    rotationWindowPercentage = 6392442863481646880;
                }};
            }};

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate` - Creates a new CertificateIssuanceConfig in a given project and location.
* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsList` - Lists CertificateIssuanceConfigs in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate` - Creates a new CertificateMapEntry in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList` - Lists CertificateMapEntries in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCreate` - Creates a new CertificateMap in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsList` - Lists CertificateMaps in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesCreate` - Creates a new Certificate in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesList` - Lists Certificates in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsCreate` - Creates a new DnsAuthorization in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsList` - Lists DnsAuthorizations in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsPatch` - Updates a DnsAuthorization.
* `certificatemanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `certificatemanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `certificatemanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `certificatemanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `certificatemanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
