# Devices

### Available Operations

* [CloudidentityDevicesCreate](#cloudidentitydevicescreate) - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* [CloudidentityDevicesDeviceUsersApprove](#cloudidentitydevicesdeviceusersapprove) - Approves device to access user data.
* [CloudidentityDevicesDeviceUsersBlock](#cloudidentitydevicesdeviceusersblock) - Blocks device from accessing user data
* [CloudidentityDevicesDeviceUsersCancelWipe](#cloudidentitydevicesdeviceuserscancelwipe) - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* [CloudidentityDevicesDeviceUsersClientStatesList](#cloudidentitydevicesdeviceusersclientstateslist) - Lists the client states for the given search query.
* [CloudidentityDevicesDeviceUsersList](#cloudidentitydevicesdeviceuserslist) - Lists/Searches DeviceUsers.
* [CloudidentityDevicesDeviceUsersLookup](#cloudidentitydevicesdeviceuserslookup) - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* [CloudidentityDevicesDeviceUsersWipe](#cloudidentitydevicesdeviceuserswipe) - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
* [CloudidentityDevicesList](#cloudidentitydeviceslist) - Lists/Searches devices.

## CloudidentityDevicesCreate

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

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
    res, err := s.Devices.CloudidentityDevicesCreate(ctx, operations.CloudidentityDevicesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsCloudidentityDevicesV1DeviceInput: &shared.GoogleAppsCloudidentityDevicesV1DeviceInput{
            AndroidSpecificAttributes: &shared.GoogleAppsCloudidentityDevicesV1AndroidAttributes{
                EnabledUnknownSources: sdk.Bool(false),
                OwnerProfileAccount: sdk.Bool(false),
                OwnershipPrivilege: shared.GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnumOwnershipPrivilegeUnspecified.ToPointer(),
                SupportsWorkProfile: sdk.Bool(false),
            },
            AssetTag: sdk.String("corporis"),
            DeviceID: sdk.String("explicabo"),
            LastSyncTime: sdk.String("nobis"),
            SerialNumber: sdk.String("enim"),
            WifiMacAddresses: []string{
                "nemo",
                "minima",
                "excepturi",
            },
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Customer: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.CloudidentityDevicesCreateSecurity{
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

## CloudidentityDevicesDeviceUsersApprove

Approves device to access user data.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersApprove(ctx, operations.CloudidentityDevicesDeviceUsersApproveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest: &shared.GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest{
            Customer: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestiae"),
        Name: "Sabrina Cronin MD",
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.CloudidentityDevicesDeviceUsersApproveSecurity{
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

## CloudidentityDevicesDeviceUsersBlock

Blocks device from accessing user data

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersBlock(ctx, operations.CloudidentityDevicesDeviceUsersBlockRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest: &shared.GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest{
            Customer: sdk.String("tenetur"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        Name: "Dr. Jake Pacocha",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.CloudidentityDevicesDeviceUsersBlockSecurity{
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

## CloudidentityDevicesDeviceUsersCancelWipe

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersCancelWipe(ctx, operations.CloudidentityDevicesDeviceUsersCancelWipeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest: &shared.GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest{
            Customer: sdk.String("omnis"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        Name: "Shawna Carter",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.CloudidentityDevicesDeviceUsersCancelWipeSecurity{
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

## CloudidentityDevicesDeviceUsersClientStatesList

Lists the client states for the given search query.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersClientStatesList(ctx, operations.CloudidentityDevicesDeviceUsersClientStatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Customer: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        OrderBy: sdk.String("modi"),
        PageToken: sdk.String("praesentium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.CloudidentityDevicesDeviceUsersClientStatesListSecurity{
        Option1: &operations.CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse != nil {
        // handle response
    }
}
```

## CloudidentityDevicesDeviceUsersList

Lists/Searches DeviceUsers.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersList(ctx, operations.CloudidentityDevicesDeviceUsersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Customer: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Filter: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        OrderBy: sdk.String("deserunt"),
        PageSize: sdk.Int64(716327),
        PageToken: sdk.String("quibusdam"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.CloudidentityDevicesDeviceUsersListSecurity{
        Option1: &operations.CloudidentityDevicesDeviceUsersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse != nil {
        // handle response
    }
}
```

## CloudidentityDevicesDeviceUsersLookup

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersLookup(ctx, operations.CloudidentityDevicesDeviceUsersLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AndroidID: sdk.String("magni"),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        PageSize: sdk.Int64(677817),
        PageToken: sdk.String("excepturi"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        RawResourceID: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
        UserID: sdk.String("eum"),
    }, operations.CloudidentityDevicesDeviceUsersLookupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse != nil {
        // handle response
    }
}
```

## CloudidentityDevicesDeviceUsersWipe

Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.

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
    res, err := s.Devices.CloudidentityDevicesDeviceUsersWipe(ctx, operations.CloudidentityDevicesDeviceUsersWipeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest: &shared.GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest{
            Customer: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        Name: "Curtis Toy",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.CloudidentityDevicesDeviceUsersWipeSecurity{
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

## CloudidentityDevicesList

Lists/Searches devices.

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
    res, err := s.Devices.CloudidentityDevicesList(ctx, operations.CloudidentityDevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Customer: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Filter: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        OrderBy: sdk.String("non"),
        PageSize: sdk.Int64(581273),
        PageToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
        View: operations.CloudidentityDevicesListViewEnumCompanyInventory.ToPointer(),
    }, operations.CloudidentityDevicesListSecurity{
        Option1: &operations.CloudidentityDevicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsCloudidentityDevicesV1ListDevicesResponse != nil {
        // handle response
    }
}
```
