# Storelayoutclusters

### Available Operations

* [AndroidenterpriseStorelayoutclustersDelete](#androidenterprisestorelayoutclustersdelete) - Deletes a cluster.
* [AndroidenterpriseStorelayoutclustersGet](#androidenterprisestorelayoutclustersget) - Retrieves details of a cluster.
* [AndroidenterpriseStorelayoutclustersInsert](#androidenterprisestorelayoutclustersinsert) - Inserts a new cluster in a page.
* [AndroidenterpriseStorelayoutclustersList](#androidenterprisestorelayoutclusterslist) - Retrieves the details of all clusters on the specified page.
* [AndroidenterpriseStorelayoutclustersUpdate](#androidenterprisestorelayoutclustersupdate) - Updates a cluster.

## AndroidenterpriseStorelayoutclustersDelete

Deletes a cluster.

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
    res, err := s.Storelayoutclusters.AndroidenterpriseStorelayoutclustersDelete(ctx, operations.AndroidenterpriseStorelayoutclustersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        ClusterID: "mollitia",
        EnterpriseID: "veniam",
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("repudiandae"),
        PageID: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.AndroidenterpriseStorelayoutclustersDeleteSecurity{
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

## AndroidenterpriseStorelayoutclustersGet

Retrieves details of a cluster.

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
    res, err := s.Storelayoutclusters.AndroidenterpriseStorelayoutclustersGet(ctx, operations.AndroidenterpriseStorelayoutclustersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        ClusterID: "et",
        EnterpriseID: "esse",
        Fields: sdk.String("amet"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("ea"),
        PageID: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.AndroidenterpriseStorelayoutclustersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreCluster != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutclustersInsert

Inserts a new cluster in a page.

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
    res, err := s.Storelayoutclusters.AndroidenterpriseStorelayoutclustersInsert(ctx, operations.AndroidenterpriseStorelayoutclustersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StoreCluster: &shared.StoreCluster{
            ID: sdk.String("9526f8d9-86e8-481e-ad4f-0e1012563f94"),
            Name: []shared.LocalizedText{
                shared.LocalizedText{
                    Locale: sdk.String("consequuntur"),
                    Text: sdk.String("occaecati"),
                },
                shared.LocalizedText{
                    Locale: sdk.String("officiis"),
                    Text: sdk.String("perspiciatis"),
                },
                shared.LocalizedText{
                    Locale: sdk.String("in"),
                    Text: sdk.String("adipisci"),
                },
                shared.LocalizedText{
                    Locale: sdk.String("eveniet"),
                    Text: sdk.String("occaecati"),
                },
            },
            OrderInPage: sdk.String("consequuntur"),
            ProductID: []string{
                "id",
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        EnterpriseID: "illo",
        Fields: sdk.String("corporis"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("eveniet"),
        PageID: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("iure"),
    }, operations.AndroidenterpriseStorelayoutclustersInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreCluster != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutclustersList

Retrieves the details of all clusters on the specified page.

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
    res, err := s.Storelayoutclusters.AndroidenterpriseStorelayoutclustersList(ctx, operations.AndroidenterpriseStorelayoutclustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        EnterpriseID: "eveniet",
        Fields: sdk.String("qui"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("iure"),
        PageID: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.AndroidenterpriseStorelayoutclustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreLayoutClustersListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseStorelayoutclustersUpdate

Updates a cluster.

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
    res, err := s.Storelayoutclusters.AndroidenterpriseStorelayoutclustersUpdate(ctx, operations.AndroidenterpriseStorelayoutclustersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StoreCluster: &shared.StoreCluster{
            ID: sdk.String("845f0597-a60f-4f2a-94a3-1e94764a3e86"),
            Name: []shared.LocalizedText{
                shared.LocalizedText{
                    Locale: sdk.String("recusandae"),
                    Text: sdk.String("esse"),
                },
                shared.LocalizedText{
                    Locale: sdk.String("provident"),
                    Text: sdk.String("quis"),
                },
            },
            OrderInPage: sdk.String("eum"),
            ProductID: []string{
                "provident",
                "aspernatur",
                "ullam",
                "quasi",
            },
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        ClusterID: "provident",
        EnterpriseID: "possimus",
        Fields: sdk.String("animi"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("aliquid"),
        PageID: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.AndroidenterpriseStorelayoutclustersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreCluster != nil {
        // handle response
    }
}
```
