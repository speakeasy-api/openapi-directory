# ThreatLists

### Available Operations

* [WebriskThreatListsComputeDiff](#webriskthreatlistscomputediff) - Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

## WebriskThreatListsComputeDiff

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

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
    res, err := s.ThreatLists.WebriskThreatListsComputeDiff(ctx, operations.WebriskThreatListsComputeDiffRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        ConstraintsMaxDatabaseEntries: sdk.Int64(623510),
        ConstraintsMaxDiffEntries: sdk.Int64(158969),
        ConstraintsSupportedCompressions: []WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum{
            operations.WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnumCompressionTypeUnspecified,
            operations.WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnumRice,
        },
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        ThreatType: operations.WebriskThreatListsComputeDiffThreatTypeEnumThreatTypeUnspecified.ToPointer(),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
        VersionToken: sdk.String("id"),
    }, operations.WebriskThreatListsComputeDiffSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1ComputeThreatListDiffResponse != nil {
        // handle response
    }
}
```
