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
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsDeleteRequest req = new LicensingLicenseAssignmentsDeleteRequest("corrupti", "provident", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            LicensingLicenseAssignmentsDeleteResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req, new LicensingLicenseAssignmentsDeleteSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
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


### [licenseAssignments](docs/licenseassignments/README.md)

* [licensingLicenseAssignmentsDelete](docs/licenseassignments/README.md#licensinglicenseassignmentsdelete) - Revoke a license.
* [licensingLicenseAssignmentsGet](docs/licenseassignments/README.md#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [licensingLicenseAssignmentsInsert](docs/licenseassignments/README.md#licensinglicenseassignmentsinsert) - Assign a license.
* [licensingLicenseAssignmentsListForProduct](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsListForProductAndSku](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsPatch](docs/licenseassignments/README.md#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [licensingLicenseAssignmentsUpdate](docs/licenseassignments/README.md#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
