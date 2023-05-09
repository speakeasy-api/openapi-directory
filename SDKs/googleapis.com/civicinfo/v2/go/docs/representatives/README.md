# Representatives

### Available Operations

* [CivicinfoRepresentativesRepresentativeInfoByAddress](#civicinforepresentativesrepresentativeinfobyaddress) - Looks up political geography and representative information for a single address.
* [CivicinfoRepresentativesRepresentativeInfoByDivision](#civicinforepresentativesrepresentativeinfobydivision) - Looks up representative information for a single geographic division.

## CivicinfoRepresentativesRepresentativeInfoByAddress

Looks up political geography and representative information for a single address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Representatives.CivicinfoRepresentativesRepresentativeInfoByAddress(ctx, operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Address: sdk.String("59751 Jaren Ford"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        IncludeOffices: sdk.Bool(false),
        Key: sdk.String("esse"),
        Levels: []CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum{
            operations.CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumLocality,
        },
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        Roles: []CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum{
            operations.CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumHighestCourtJudge,
            operations.CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumHeadOfGovernment,
        },
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepresentativeInfoResponse != nil {
        // handle response
    }
}
```

## CivicinfoRepresentativesRepresentativeInfoByDivision

Looks up representative information for a single geographic division.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Representatives.CivicinfoRepresentativesRepresentativeInfoByDivision(ctx, operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        Levels: []CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum{
            operations.CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumLocality,
            operations.CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumRegional,
        },
        OauthToken: sdk.String("saepe"),
        OcdID: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        Recursive: sdk.Bool(false),
        Roles: []CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum{
            operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumOtherRole,
        },
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepresentativeInfoData != nil {
        // handle response
    }
}
```
