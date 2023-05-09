# Mobiledevices

### Available Operations

* [DirectoryMobiledevicesAction](#directorymobiledevicesaction) - Takes an action that affects a mobile device. For example, remotely wiping a device.
* [DirectoryMobiledevicesDelete](#directorymobiledevicesdelete) - Removes a mobile device.
* [DirectoryMobiledevicesGet](#directorymobiledevicesget) - Retrieves a mobile device's properties.
* [DirectoryMobiledevicesList](#directorymobiledeviceslist) - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

## DirectoryMobiledevicesAction

Takes an action that affects a mobile device. For example, remotely wiping a device.

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
    res, err := s.Mobiledevices.DirectoryMobiledevicesAction(ctx, operations.DirectoryMobiledevicesActionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MobileDeviceAction: &shared.MobileDeviceAction{
            Action: sdk.String("repellat"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        CustomerID: "deleniti",
        Fields: sdk.String("illo"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        ResourceID: "quisquam",
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DirectoryMobiledevicesActionSecurity{
        Option1: &operations.DirectoryMobiledevicesActionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryMobiledevicesDelete

Removes a mobile device.

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
    res, err := s.Mobiledevices.DirectoryMobiledevicesDelete(ctx, operations.DirectoryMobiledevicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        CustomerID: "nam",
        Fields: sdk.String("expedita"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        ResourceID: "rerum",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DirectoryMobiledevicesDeleteSecurity{
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

## DirectoryMobiledevicesGet

Retrieves a mobile device's properties.

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
    res, err := s.Mobiledevices.DirectoryMobiledevicesGet(ctx, operations.DirectoryMobiledevicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        CustomerID: "dolorem",
        Fields: sdk.String("commodi"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryMobiledevicesGetProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("voluptatem"),
        ResourceID: "ad",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("amet"),
    }, operations.DirectoryMobiledevicesGetSecurity{
        Option1: &operations.DirectoryMobiledevicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileDevice != nil {
        // handle response
    }
}
```

## DirectoryMobiledevicesList

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

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
    res, err := s.Mobiledevices.DirectoryMobiledevicesList(ctx, operations.DirectoryMobiledevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        CustomerID: "amet",
        Fields: sdk.String("quasi"),
        Key: sdk.String("dicta"),
        MaxResults: sdk.Int64(514922),
        OauthToken: sdk.String("doloremque"),
        OrderBy: operations.DirectoryMobiledevicesListOrderByEnumType.ToPointer(),
        PageToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryMobiledevicesListProjectionEnumBasic.ToPointer(),
        Query: sdk.String("provident"),
        QuotaUser: sdk.String("dolorum"),
        SortOrder: operations.DirectoryMobiledevicesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.DirectoryMobiledevicesListSecurity{
        Option1: &operations.DirectoryMobiledevicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileDevices != nil {
        // handle response
    }
}
```
