# V1p7beta1

### Available Operations

* [CloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

## CloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

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
    res, err := s.V1p7beta1.CloudassetExportAssets(ctx, operations.CloudassetExportAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudAssetV1p7beta1ExportAssetsRequest: &shared.GoogleCloudAssetV1p7beta1ExportAssetsRequest{
            AssetTypes: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
            ContentType: shared.GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumRelationship.ToPointer(),
            OutputConfig: &shared.GoogleCloudAssetV1p7beta1OutputConfig{
                BigqueryDestination: &shared.GoogleCloudAssetV1p7beta1BigQueryDestination{
                    Dataset: sdk.String("quo"),
                    Force: sdk.Bool(false),
                    PartitionSpec: &shared.GoogleCloudAssetV1p7beta1PartitionSpec{
                        PartitionKey: shared.GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnumPartitionKeyUnspecified.ToPointer(),
                    },
                    SeparateTablesPerAssetType: sdk.Bool(false),
                    Table: sdk.String("at"),
                },
                GcsDestination: &shared.GoogleCloudAssetV1p7beta1GcsDestination{
                    URI: sdk.String("https://wonderful-investor.net"),
                    URIPrefix: sdk.String("quod"),
                },
            },
            ReadTime: sdk.String("esse"),
            RelationshipTypes: []string{
                "porro",
                "dolorum",
                "dicta",
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("hic"),
        Parent: "optio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.CloudassetExportAssetsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
