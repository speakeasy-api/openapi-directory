# Sdfdownloadtasks

### Available Operations

* [DisplayvideoSdfdownloadtasksCreate](#displayvideosdfdownloadtaskscreate) - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* [DisplayvideoSdfdownloadtasksOperationsGet](#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

## DisplayvideoSdfdownloadtasksCreate

Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.

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
    res, err := s.Sdfdownloadtasks.DisplayvideoSdfdownloadtasksCreate(ctx, operations.DisplayvideoSdfdownloadtasksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateSdfDownloadTaskRequest: &shared.CreateSdfDownloadTaskRequest{
            AdvertiserID: sdk.String("architecto"),
            IDFilter: &shared.IDFilter{
                AdGroupAdIds: []string{
                    "voluptatem",
                },
                AdGroupIds: []string{
                    "error",
                    "deleniti",
                    "enim",
                },
                CampaignIds: []string{
                    "saepe",
                },
                InsertionOrderIds: []string{
                    "reiciendis",
                    "quis",
                    "modi",
                },
                LineItemIds: []string{
                    "pariatur",
                },
                MediaProductIds: []string{
                    "nemo",
                    "dolore",
                    "numquam",
                },
            },
            InventorySourceFilter: &shared.InventorySourceFilter{
                InventorySourceIds: []string{
                    "perspiciatis",
                },
            },
            ParentEntityFilter: &shared.ParentEntityFilter{
                FileType: []shared.ParentEntityFilterFileTypeEnum{
                    shared.ParentEntityFilterFileTypeEnumFileTypeAd,
                    shared.ParentEntityFilterFileTypeEnumFileTypeCampaign,
                    shared.ParentEntityFilterFileTypeEnumFileTypeUnspecified,
                    shared.ParentEntityFilterFileTypeEnumFileTypeCampaign,
                },
                FilterIds: []string{
                    "laboriosam",
                    "accusantium",
                },
                FilterType: shared.ParentEntityFilterFilterTypeEnumFilterTypeNone.ToPointer(),
            },
            PartnerID: sdk.String("aliquam"),
            Version: shared.CreateSdfDownloadTaskRequestVersionEnumSdfVersion4.ToPointer(),
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("minima"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DisplayvideoSdfdownloadtasksCreateSecurity{
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

## DisplayvideoSdfdownloadtasksOperationsGet

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

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
    res, err := s.Sdfdownloadtasks.DisplayvideoSdfdownloadtasksOperationsGet(ctx, operations.DisplayvideoSdfdownloadtasksOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("totam"),
        Name: "Cristina Nader",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DisplayvideoSdfdownloadtasksOperationsGetSecurity{
        Option1: &operations.DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
