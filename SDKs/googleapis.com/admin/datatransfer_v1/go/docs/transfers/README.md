# Transfers

### Available Operations

* [DatatransferTransfersGet](#datatransfertransfersget) - Retrieves a data transfer request by its resource ID.
* [DatatransferTransfersInsert](#datatransfertransfersinsert) - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* [DatatransferTransfersList](#datatransfertransferslist) - Lists the transfers for a customer by source user, destination user, or status.

## DatatransferTransfersGet

Retrieves a data transfer request by its resource ID.

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
    res, err := s.Transfers.DatatransferTransfersGet(ctx, operations.DatatransferTransfersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        DataTransferID: "at",
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DatatransferTransfersGetSecurity{
        Option1: &operations.DatatransferTransfersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataTransfer != nil {
        // handle response
    }
}
```

## DatatransferTransfersInsert

Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transfers.DatatransferTransfersInsert(ctx, operations.DatatransferTransfersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DataTransfer: &shared.DataTransfer{
            ApplicationDataTransfers: []shared.ApplicationDataTransfer{
                shared.ApplicationDataTransfer{
                    ApplicationID: sdk.String("dicta"),
                    ApplicationTransferParams: []shared.ApplicationTransferParam{
                        shared.ApplicationTransferParam{
                            Key: sdk.String("officia"),
                            Value: []string{
                                "fugit",
                                "deleniti",
                                "hic",
                            },
                        },
                        shared.ApplicationTransferParam{
                            Key: sdk.String("optio"),
                            Value: []string{
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                        shared.ApplicationTransferParam{
                            Key: sdk.String("modi"),
                            Value: []string{
                                "impedit",
                            },
                        },
                    },
                    ApplicationTransferStatus: sdk.String("cum"),
                },
                shared.ApplicationDataTransfer{
                    ApplicationID: sdk.String("esse"),
                    ApplicationTransferParams: []shared.ApplicationTransferParam{
                        shared.ApplicationTransferParam{
                            Key: sdk.String("excepturi"),
                            Value: []string{
                                "perferendis",
                            },
                        },
                    },
                    ApplicationTransferStatus: sdk.String("ad"),
                },
                shared.ApplicationDataTransfer{
                    ApplicationID: sdk.String("natus"),
                    ApplicationTransferParams: []shared.ApplicationTransferParam{
                        shared.ApplicationTransferParam{
                            Key: sdk.String("iste"),
                            Value: []string{
                                "natus",
                            },
                        },
                    },
                    ApplicationTransferStatus: sdk.String("laboriosam"),
                },
            },
            Etag: sdk.String("hic"),
            ID: sdk.String("ea7596eb-10fa-4aa2-b52c-5955907aff1a"),
            Kind: sdk.String("dolorem"),
            NewOwnerUserID: sdk.String("culpa"),
            OldOwnerUserID: sdk.String("consequuntur"),
            OverallTransferStatusCode: sdk.String("repellat"),
            RequestTime: types.MustTimeFromString("2021-11-02T05:58:55.429Z"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.DatatransferTransfersInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataTransfer != nil {
        // handle response
    }
}
```

## DatatransferTransfersList

Lists the transfers for a customer by source user, destination user, or status.

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
    res, err := s.Transfers.DatatransferTransfersList(ctx, operations.DatatransferTransfersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        CustomerID: sdk.String("quo"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("tenetur"),
        MaxResults: sdk.Int64(368725),
        NewOwnerUserID: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        OldOwnerUserID: sdk.String("aut"),
        PageToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        Status: sdk.String("temporibus"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatatransferTransfersListSecurity{
        Option1: &operations.DatatransferTransfersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataTransfersListResponse != nil {
        // handle response
    }
}
```
