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

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest() {{
                security = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams() {{
                    name = "sit";
                }};
                queryParams = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "dicta";
                    requestId = "debitis";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "voluptatum";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]() {{
                                add("ut"),
                            }};
                        }};
                    }};
                }};
            }};

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req);

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

* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate` - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList` - Lists CertificateRevocationLists.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate` - Create a new CertificateAuthority in a given Project and Location.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable` - Disable a CertificateAuthority.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable` - Enable a CertificateAuthority.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch` - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList` - Lists CertificateAuthorities.
* `privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete` - Undelete a CertificateAuthority that has been deleted.
* `privatecaProjectsLocationsCaPoolsCertificatesCreate` - Create a new Certificate in a given Project, Location from a particular CaPool.
* `privatecaProjectsLocationsCaPoolsCertificatesList` - Lists Certificates.
* `privatecaProjectsLocationsCaPoolsCertificatesRevoke` - Revoke a Certificate.
* `privatecaProjectsLocationsCaPoolsCreate` - Create a CaPool.
* `privatecaProjectsLocationsCaPoolsFetchCaCerts` - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* `privatecaProjectsLocationsCaPoolsList` - Lists CaPools.
* `privatecaProjectsLocationsCertificateTemplatesCreate` - Create a new CertificateTemplate in a given Project and Location.
* `privatecaProjectsLocationsCertificateTemplatesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `privatecaProjectsLocationsCertificateTemplatesList` - Lists CertificateTemplates.
* `privatecaProjectsLocationsCertificateTemplatesPatch` - Update a CertificateTemplate.
* `privatecaProjectsLocationsCertificateTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `privatecaProjectsLocationsCertificateTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `privatecaProjectsLocationsList` - Lists information about the supported locations for this service.
* `privatecaProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `privatecaProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `privatecaProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `privatecaProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
