# Installs

### Available Operations

* [AndroidenterpriseInstallsDelete](#androidenterpriseinstallsdelete) - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
* [AndroidenterpriseInstallsGet](#androidenterpriseinstallsget) - Retrieves details of an installation of an app on a device.
* [AndroidenterpriseInstallsList](#androidenterpriseinstallslist) - Retrieves the details of all apps installed on the specified device.
* [AndroidenterpriseInstallsUpdate](#androidenterpriseinstallsupdate) - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

## AndroidenterpriseInstallsDelete

Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.

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
    res, err := s.Installs.AndroidenterpriseInstallsDelete(ctx, operations.AndroidenterpriseInstallsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugiat"),
        DeviceID: "ut",
        EnterpriseID: "eum",
        Fields: sdk.String("suscipit"),
        InstallID: "assumenda",
        Key: sdk.String("eos"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ipsa"),
        UserID: "id",
    }, operations.AndroidenterpriseInstallsDeleteSecurity{
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

## AndroidenterpriseInstallsGet

Retrieves details of an installation of an app on a device.

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
    res, err := s.Installs.AndroidenterpriseInstallsGet(ctx, operations.AndroidenterpriseInstallsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        DeviceID: "quo",
        EnterpriseID: "fuga",
        Fields: sdk.String("eius"),
        InstallID: "eos",
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("tempora"),
        UserID: "debitis",
    }, operations.AndroidenterpriseInstallsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Install != nil {
        // handle response
    }
}
```

## AndroidenterpriseInstallsList

Retrieves the details of all apps installed on the specified device.

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
    res, err := s.Installs.AndroidenterpriseInstallsList(ctx, operations.AndroidenterpriseInstallsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        DeviceID: "esse",
        EnterpriseID: "recusandae",
        Fields: sdk.String("aperiam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("nihil"),
        UserID: "totam",
    }, operations.AndroidenterpriseInstallsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallsListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseInstallsUpdate

Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

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
    res, err := s.Installs.AndroidenterpriseInstallsUpdate(ctx, operations.AndroidenterpriseInstallsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Install: &shared.Install{
            InstallState: shared.InstallInstallStateEnumInstalled.ToPointer(),
            ProductID: sdk.String("odio"),
            VersionCode: sdk.Int(577543),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        DeviceID: "deserunt",
        EnterpriseID: "molestiae",
        Fields: sdk.String("accusantium"),
        InstallID: "porro",
        Key: sdk.String("eum"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("deleniti"),
        UserID: "fugit",
    }, operations.AndroidenterpriseInstallsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Install != nil {
        // handle response
    }
}
```
