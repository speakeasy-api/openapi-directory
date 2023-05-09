# Projects

### Available Operations

* [CloudassetProjectsBatchGetAssetsHistory](#cloudassetprojectsbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [CloudassetProjectsExportAssets](#cloudassetprojectsexportassets) - Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [CloudassetProjectsOperationsGet](#cloudassetprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## CloudassetProjectsBatchGetAssetsHistory

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

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
    res, err := s.Projects.CloudassetProjectsBatchGetAssetsHistory(ctx, operations.CloudassetProjectsBatchGetAssetsHistoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssetNames: []string{
            "iusto",
            "excepturi",
            "nisi",
        },
        Callback: sdk.String("recusandae"),
        ContentType: operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnumIamPolicy.ToPointer(),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        ReadTimeWindowEndTime: sdk.String("ipsam"),
        ReadTimeWindowStartTime: sdk.String("repellendus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quo"),
    }, operations.CloudassetProjectsBatchGetAssetsHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
}
```

## CloudassetProjectsExportAssets

Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

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
    res, err := s.Projects.CloudassetProjectsExportAssets(ctx, operations.CloudassetProjectsExportAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExportAssetsRequest: &shared.ExportAssetsRequest{
            AssetTypes: []string{
                "at",
                "maiores",
                "molestiae",
                "quod",
            },
            ContentType: shared.ExportAssetsRequestContentTypeEnumIamPolicy.ToPointer(),
            OutputConfig: &shared.OutputConfig{
                GcsDestination: &shared.GcsDestination{
                    URI: sdk.String("http://meager-seabass.net"),
                    URIPrefix: sdk.String("dicta"),
                },
            },
            ReadTime: sdk.String("nam"),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.CloudassetProjectsExportAssetsSecurity{
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

## CloudassetProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.CloudassetProjectsOperationsGet(ctx, operations.CloudassetProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        Name: "Brandon Auer",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.CloudassetProjectsOperationsGetSecurity{
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
