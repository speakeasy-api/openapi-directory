# Returnaddress

### Available Operations

* [ContentReturnaddressCustombatch](#contentreturnaddresscustombatch) - Batches multiple return address related calls in a single request.
* [ContentReturnaddressDelete](#contentreturnaddressdelete) - Deletes a return address for the given Merchant Center account.
* [ContentReturnaddressGet](#contentreturnaddressget) - Gets a return address of the Merchant Center account.
* [ContentReturnaddressInsert](#contentreturnaddressinsert) - Inserts a return address for the Merchant Center account.
* [ContentReturnaddressList](#contentreturnaddresslist) - Lists the return addresses of the Merchant Center account.

## ContentReturnaddressCustombatch

Batches multiple return address related calls in a single request.

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
    res, err := s.Returnaddress.ContentReturnaddressCustombatch(ctx, operations.ContentReturnaddressCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReturnaddressCustomBatchRequest: &shared.ReturnaddressCustomBatchRequest{
            Entries: []shared.ReturnaddressCustomBatchRequestEntry{
                shared.ReturnaddressCustomBatchRequestEntry{
                    BatchID: sdk.Int64(299166),
                    MerchantID: sdk.String("vitae"),
                    Method: sdk.String("quos"),
                    ReturnAddress: &shared.ReturnAddress{
                        Address: &shared.ReturnAddressAddress{
                            Country: sdk.String("Maldives"),
                            Locality: sdk.String("quisquam"),
                            PostalCode: sdk.String("93485"),
                            RecipientName: sdk.String("ipsam"),
                            Region: sdk.String("at"),
                            StreetAddress: []string{
                                "nihil",
                                "laudantium",
                                "dolorem",
                            },
                        },
                        Country: sdk.String("Burkina Faso"),
                        Kind: sdk.String("officiis"),
                        Label: sdk.String("mollitia"),
                        PhoneNumber: sdk.String("libero"),
                        ReturnAddressID: sdk.String("fugiat"),
                    },
                    ReturnAddressID: sdk.String("voluptas"),
                },
                shared.ReturnaddressCustomBatchRequestEntry{
                    BatchID: sdk.Int64(93212),
                    MerchantID: sdk.String("odio"),
                    Method: sdk.String("eligendi"),
                    ReturnAddress: &shared.ReturnAddress{
                        Address: &shared.ReturnAddressAddress{
                            Country: sdk.String("Cook Islands"),
                            Locality: sdk.String("harum"),
                            PostalCode: sdk.String("83163"),
                            RecipientName: sdk.String("ut"),
                            Region: sdk.String("quidem"),
                            StreetAddress: []string{
                                "sit",
                                "architecto",
                                "tempore",
                                "deserunt",
                            },
                        },
                        Country: sdk.String("Sweden"),
                        Kind: sdk.String("corrupti"),
                        Label: sdk.String("voluptate"),
                        PhoneNumber: sdk.String("alias"),
                        ReturnAddressID: sdk.String("iure"),
                    },
                    ReturnAddressID: sdk.String("temporibus"),
                },
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ContentReturnaddressCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnaddressCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentReturnaddressDelete

Deletes a return address for the given Merchant Center account.

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
    res, err := s.Returnaddress.ContentReturnaddressDelete(ctx, operations.ContentReturnaddressDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("nemo"),
        MerchantID: "at",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        ReturnAddressID: "sed",
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ContentReturnaddressDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentReturnaddressGet

Gets a return address of the Merchant Center account.

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
    res, err := s.Returnaddress.ContentReturnaddressGet(ctx, operations.ContentReturnaddressGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("facilis"),
        MerchantID: "amet",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        ReturnAddressID: "beatae",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.ContentReturnaddressGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnAddress != nil {
        // handle response
    }
}
```

## ContentReturnaddressInsert

Inserts a return address for the Merchant Center account.

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
    res, err := s.Returnaddress.ContentReturnaddressInsert(ctx, operations.ContentReturnaddressInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReturnAddress: &shared.ReturnAddress{
            Address: &shared.ReturnAddressAddress{
                Country: sdk.String("Marshall Islands"),
                Locality: sdk.String("delectus"),
                PostalCode: sdk.String("98745"),
                RecipientName: sdk.String("consectetur"),
                Region: sdk.String("nemo"),
                StreetAddress: []string{
                    "accusamus",
                    "minus",
                    "impedit",
                },
            },
            Country: sdk.String("Ghana"),
            Kind: sdk.String("cumque"),
            Label: sdk.String("rerum"),
            PhoneNumber: sdk.String("praesentium"),
            ReturnAddressID: sdk.String("vel"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("illum"),
        MerchantID: "ullam",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("animi"),
    }, operations.ContentReturnaddressInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnAddress != nil {
        // handle response
    }
}
```

## ContentReturnaddressList

Lists the return addresses of the Merchant Center account.

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
    res, err := s.Returnaddress.ContentReturnaddressList(ctx, operations.ContentReturnaddressListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sunt"),
        Country: sdk.String("Aruba"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("quaerat"),
        MaxResults: sdk.Int64(999949),
        MerchantID: "necessitatibus",
        OauthToken: sdk.String("tempora"),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("magni"),
    }, operations.ContentReturnaddressListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnaddressListResponse != nil {
        // handle response
    }
}
```
