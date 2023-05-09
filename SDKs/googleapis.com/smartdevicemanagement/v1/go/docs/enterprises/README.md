# Enterprises

### Available Operations

* [SmartdevicemanagementEnterprisesDevicesExecuteCommand](#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [SmartdevicemanagementEnterprisesDevicesList](#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresList](#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresRoomsGet](#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [SmartdevicemanagementEnterprisesStructuresRoomsList](#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.

## SmartdevicemanagementEnterprisesDevicesExecuteCommand

Executes a command to device managed by the enterprise.

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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: sdk.String("excepturi"),
            Params: map[string]interface{}{
                "recusandae": "temporibus",
                "ab": "quis",
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        Name: "Cedric Connelly",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != nil {
        // handle response
    }
}
```

## SmartdevicemanagementEnterprisesDevicesList

Lists devices managed by the enterprise.

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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesList(ctx, operations.SmartdevicemanagementEnterprisesDevicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.SmartdevicemanagementEnterprisesDevicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ListDevicesResponse != nil {
        // handle response
    }
}
```

## SmartdevicemanagementEnterprisesStructuresList

Lists structures managed by the enterprise.

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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesStructuresList(ctx, operations.SmartdevicemanagementEnterprisesStructuresListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Filter: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(568434),
        PageToken: sdk.String("aspernatur"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.SmartdevicemanagementEnterprisesStructuresListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ListStructuresResponse != nil {
        // handle response
    }
}
```

## SmartdevicemanagementEnterprisesStructuresRoomsGet

Gets a room managed by the enterprise.

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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesStructuresRoomsGet(ctx, operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        Name: "Harvey Hessel",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1Room != nil {
        // handle response
    }
}
```

## SmartdevicemanagementEnterprisesStructuresRoomsList

Lists rooms managed by the enterprise.

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
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesStructuresRoomsList(ctx, operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(128926),
        PageToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.SmartdevicemanagementEnterprisesStructuresRoomsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ListRoomsResponse != nil {
        // handle response
    }
}
```
