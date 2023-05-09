# Webapps

### Available Operations

* [AndroidenterpriseWebappsDelete](#androidenterprisewebappsdelete) - Deletes an existing web app.
* [AndroidenterpriseWebappsGet](#androidenterprisewebappsget) - Gets an existing web app.
* [AndroidenterpriseWebappsInsert](#androidenterprisewebappsinsert) - Creates a new web app for the enterprise.
* [AndroidenterpriseWebappsList](#androidenterprisewebappslist) - Retrieves the details of all web apps for a given enterprise.
* [AndroidenterpriseWebappsUpdate](#androidenterprisewebappsupdate) - Updates an existing web app.

## AndroidenterpriseWebappsDelete

Deletes an existing web app.

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
    res, err := s.Webapps.AndroidenterpriseWebappsDelete(ctx, operations.AndroidenterpriseWebappsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        EnterpriseID: "excepturi",
        Fields: sdk.String("eum"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("dicta"),
        WebAppID: "impedit",
    }, operations.AndroidenterpriseWebappsDeleteSecurity{
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

## AndroidenterpriseWebappsGet

Gets an existing web app.

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
    res, err := s.Webapps.AndroidenterpriseWebappsGet(ctx, operations.AndroidenterpriseWebappsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("alias"),
        EnterpriseID: "nisi",
        Fields: sdk.String("itaque"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("iusto"),
        WebAppID: "sit",
    }, operations.AndroidenterpriseWebappsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## AndroidenterpriseWebappsInsert

Creates a new web app for the enterprise.

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
    res, err := s.Webapps.AndroidenterpriseWebappsInsert(ctx, operations.AndroidenterpriseWebappsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WebApp: &shared.WebApp{
            DisplayMode: shared.WebAppDisplayModeEnumDisplayModeUnspecified.ToPointer(),
            Icons: []shared.WebAppIcon{
                shared.WebAppIcon{
                    ImageData: sdk.String("recusandae"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("ea"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("quidem"),
                },
            },
            IsPublished: sdk.Bool(false),
            StartURL: sdk.String("voluptas"),
            Title: sdk.String("Miss"),
            VersionCode: sdk.String("placeat"),
            WebAppID: sdk.String("perspiciatis"),
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        EnterpriseID: "voluptate",
        Fields: sdk.String("ullam"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.AndroidenterpriseWebappsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## AndroidenterpriseWebappsList

Retrieves the details of all web apps for a given enterprise.

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
    res, err := s.Webapps.AndroidenterpriseWebappsList(ctx, operations.AndroidenterpriseWebappsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        EnterpriseID: "labore",
        Fields: sdk.String("veritatis"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.AndroidenterpriseWebappsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebAppsListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseWebappsUpdate

Updates an existing web app.

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
    res, err := s.Webapps.AndroidenterpriseWebappsUpdate(ctx, operations.AndroidenterpriseWebappsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WebApp: &shared.WebApp{
            DisplayMode: shared.WebAppDisplayModeEnumDisplayModeUnspecified.ToPointer(),
            Icons: []shared.WebAppIcon{
                shared.WebAppIcon{
                    ImageData: sdk.String("ex"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("nemo"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("soluta"),
                },
            },
            IsPublished: sdk.Bool(false),
            StartURL: sdk.String("libero"),
            Title: sdk.String("Ms."),
            VersionCode: sdk.String("dolorum"),
            WebAppID: sdk.String("odio"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        EnterpriseID: "vel",
        Fields: sdk.String("quae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("itaque"),
        WebAppID: "et",
    }, operations.AndroidenterpriseWebappsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```
