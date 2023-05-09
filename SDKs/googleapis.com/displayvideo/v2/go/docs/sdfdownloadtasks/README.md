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
            AdvertiserID: sdk.String("adipisci"),
            IDFilter: &shared.IDFilter{
                AdGroupAdIds: []string{
                    "perspiciatis",
                    "optio",
                    "itaque",
                },
                AdGroupIds: []string{
                    "nam",
                    "id",
                    "cumque",
                    "in",
                },
                CampaignIds: []string{
                    "quibusdam",
                    "culpa",
                    "dolor",
                    "occaecati",
                },
                InsertionOrderIds: []string{
                    "unde",
                    "labore",
                },
                LineItemIds: []string{
                    "vel",
                    "laboriosam",
                    "soluta",
                    "minus",
                },
                MediaProductIds: []string{
                    "mollitia",
                },
            },
            InventorySourceFilter: &shared.InventorySourceFilter{
                InventorySourceIds: []string{
                    "aliquam",
                    "quas",
                    "aut",
                    "autem",
                },
            },
            ParentEntityFilter: &shared.ParentEntityFilter{
                FileType: []shared.ParentEntityFilterFileTypeEnum{
                    shared.ParentEntityFilterFileTypeEnumFileTypeUnspecified,
                },
                FilterIds: []string{
                    "iste",
                    "occaecati",
                    "enim",
                },
                FilterType: shared.ParentEntityFilterFilterTypeEnumFilterTypeNone.ToPointer(),
            },
            PartnerID: sdk.String("libero"),
            Version: shared.CreateSdfDownloadTaskRequestVersionEnumSdfVersion42.ToPointer(),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestias"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("sequi"),
        Name: "Mr. Pete Bergstrom III",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("incidunt"),
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
