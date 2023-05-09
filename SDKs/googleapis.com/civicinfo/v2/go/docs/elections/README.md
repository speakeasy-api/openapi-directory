# Elections

### Available Operations

* [CivicinfoElectionsElectionQuery](#civicinfoelectionselectionquery) - List of available elections to query.
* [CivicinfoElectionsVoterInfoQuery](#civicinfoelectionsvoterinfoquery) - Looks up information relevant to a voter based on the voter's registered address.

## CivicinfoElectionsElectionQuery

List of available elections to query.

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
    res, err := s.Elections.CivicinfoElectionsElectionQuery(ctx, operations.CivicinfoElectionsElectionQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectionsQueryResponse != nil {
        // handle response
    }
}
```

## CivicinfoElectionsVoterInfoQuery

Looks up information relevant to a voter based on the voter's registered address.

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
    res, err := s.Elections.CivicinfoElectionsVoterInfoQuery(ctx, operations.CivicinfoElectionsVoterInfoQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Address: "971 Strosin Wall",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        ElectionID: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        OfficialOnly: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        ReturnAllAvailableData: sdk.Bool(false),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoterInfoResponse != nil {
        // handle response
    }
}
```
