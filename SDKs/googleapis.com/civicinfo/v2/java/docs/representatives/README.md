# representatives

### Available Operations

* [civicinfoRepresentativesRepresentativeInfoByAddress](#civicinforepresentativesrepresentativeinfobyaddress) - Looks up political geography and representative information for a single address.
* [civicinfoRepresentativesRepresentativeInfoByDivision](#civicinforepresentativesrepresentativeinfobydivision) - Looks up representative information for a single geographic division.

## civicinfoRepresentativesRepresentativeInfoByAddress

Looks up political geography and representative information for a single address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoRepresentativesRepresentativeInfoByAddressRequest req = new CivicinfoRepresentativesRepresentativeInfoByAddressRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                address = "617 McCullough Coves";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                includeOffices = false;
                key = "totam";
                levels = new org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum[]{{
                    add(CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum.REGIONAL),
                }};
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                roles = new org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum[]{{
                    add(CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum.SCHOOL_BOARD),
                }};
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            CivicinfoRepresentativesRepresentativeInfoByAddressResponse res = sdk.representatives.civicinfoRepresentativesRepresentativeInfoByAddress(req);

            if (res.representativeInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## civicinfoRepresentativesRepresentativeInfoByDivision

Looks up representative information for a single geographic division.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse;
import org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoRepresentativesRepresentativeInfoByDivisionRequest req = new CivicinfoRepresentativesRepresentativeInfoByDivisionRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                levels = new org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum[]{{
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum.ADMINISTRATIVE_AREA1),
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum.LOCALITY),
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum.REGIONAL),
                }};
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                recursive = false;
                roles = new org.openapis.openapi.models.operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum[]{{
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum.LEGISLATOR_UPPER_BODY),
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum.EXECUTIVE_COUNCIL),
                    add(CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum.HIGHEST_COURT_JUDGE),
                }};
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            CivicinfoRepresentativesRepresentativeInfoByDivisionResponse res = sdk.representatives.civicinfoRepresentativesRepresentativeInfoByDivision(req);

            if (res.representativeInfoData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
