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
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityConfig;
import org.openapis.openapi.models.shared.CertificateAuthorityServiceConfig;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigInput;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigKeyAlgorithmEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                certificateIssuanceConfigInput = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "distinctio";
                        }};;
                    }};;
                    description = "quibusdam";
                    keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum.RSA2048;
                    labels = new java.util.HashMap<String, String>() {{
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                    }};
                    lifetime = "debitis";
                    name = "Lucia Goldner";
                    rotationWindowPercentage = 791725;
                }};;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                certificateIssuanceConfigId = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req, new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity("deserunt", "perferendis") {{
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

* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsList](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesList](docs/projects/README.md#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsCreate](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsList](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [certificatemanagerProjectsLocationsList](docs/projects/README.md#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [certificatemanagerProjectsLocationsOperationsCancel](docs/projects/README.md#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [certificatemanagerProjectsLocationsOperationsList](docs/projects/README.md#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [certificatemanagerProjectsLocationsTrustConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsDelete](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsGet](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsList](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsPatch](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
