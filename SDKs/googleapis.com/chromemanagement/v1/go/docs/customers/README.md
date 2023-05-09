# Customers

### Available Operations

* [ChromemanagementCustomersAppsCountChromeAppRequests](#chromemanagementcustomersappscountchromeapprequests) - Generate summary of app installation requests.
* [ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttention](#chromemanagementcustomersreportscountchromebrowsersneedingattention) - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* [ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate](#chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate) - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* [ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention](#chromemanagementcustomersreportscountchromedevicesthatneedattention) - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [ChromemanagementCustomersReportsCountChromeHardwareFleetDevices](#chromemanagementcustomersreportscountchromehardwarefleetdevices) - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [ChromemanagementCustomersReportsCountChromeVersions](#chromemanagementcustomersreportscountchromeversions) - Generate report of installed Chrome versions.
* [ChromemanagementCustomersReportsCountInstalledApps](#chromemanagementcustomersreportscountinstalledapps) - Generate report of app installations.
* [ChromemanagementCustomersReportsFindInstalledAppDevices](#chromemanagementcustomersreportsfindinstalledappdevices) - Generate report of managed Chrome browser devices that have a specified app installed.
* [ChromemanagementCustomersTelemetryDevicesList](#chromemanagementcustomerstelemetrydeviceslist) - List all telemetry devices.
* [ChromemanagementCustomersTelemetryEventsList](#chromemanagementcustomerstelemetryeventslist) - List telemetry events.
* [ChromemanagementCustomersTelemetryUsersGet](#chromemanagementcustomerstelemetryusersget) - Get telemetry user.
* [ChromemanagementCustomersTelemetryUsersList](#chromemanagementcustomerstelemetryuserslist) - List all telemetry users.

## ChromemanagementCustomersAppsCountChromeAppRequests

Generate summary of app installation requests.

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
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Customer: "molestiae",
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        OrderBy: sdk.String("iusto"),
        OrgUnitID: sdk.String("excepturi"),
        PageSize: sdk.Int64(392785),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeAppRequestsResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttention

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttention(ctx, operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Customer: "repellendus",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        OrgUnitID: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(ctx, operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Customer: "porro",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        MaxAueDate: sdk.String("nam"),
        MinAueDate: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        OrgUnitID: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(ctx, operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Customer: "modi",
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        OrgUnitID: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        ReadMask: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountChromeHardwareFleetDevices

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountChromeHardwareFleetDevices(ctx, operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Customer: "dolor",
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        OrgUnitID: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        ReadMask: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountChromeVersions

Generate report of installed Chrome versions.

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountChromeVersions(ctx, operations.ChromemanagementCustomersReportsCountChromeVersionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Customer: "ipsa",
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("est"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("laborum"),
        OrgUnitID: sdk.String("dolores"),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ChromemanagementCustomersReportsCountChromeVersionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeVersionsResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsCountInstalledApps

Generate report of app installations.

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
    res, err := s.Customers.ChromemanagementCustomersReportsCountInstalledApps(ctx, operations.ChromemanagementCustomersReportsCountInstalledAppsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Customer: "accusantium",
        Fields: sdk.String("iure"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        OrderBy: sdk.String("architecto"),
        OrgUnitID: sdk.String("mollitia"),
        PageSize: sdk.Int64(208876),
        PageToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.ChromemanagementCustomersReportsCountInstalledAppsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountInstalledAppsResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersReportsFindInstalledAppDevices

Generate report of managed Chrome browser devices that have a specified app installed.

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
    res, err := s.Customers.ChromemanagementCustomersReportsFindInstalledAppDevices(ctx, operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppID: sdk.String("quam"),
        AppType: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumApp.ToPointer(),
        Callback: sdk.String("velit"),
        Customer: "error",
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        OrderBy: sdk.String("animi"),
        OrgUnitID: sdk.String("enim"),
        PageSize: sdk.Int64(138183),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1FindInstalledAppDevicesResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersTelemetryDevicesList

List all telemetry devices.

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
    res, err := s.Customers.ChromemanagementCustomersTelemetryDevicesList(ctx, operations.ChromemanagementCustomersTelemetryDevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Filter: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        ReadMask: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ChromemanagementCustomersTelemetryDevicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1ListTelemetryDevicesResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersTelemetryEventsList

List telemetry events.

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
    res, err := s.Customers.ChromemanagementCustomersTelemetryEventsList(ctx, operations.ChromemanagementCustomersTelemetryEventsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Filter: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(120196),
        PageToken: sdk.String("corporis"),
        Parent: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        ReadMask: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ChromemanagementCustomersTelemetryEventsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1ListTelemetryEventsResponse != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersTelemetryUsersGet

Get telemetry user.

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
    res, err := s.Customers.ChromemanagementCustomersTelemetryUsersGet(ctx, operations.ChromemanagementCustomersTelemetryUsersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        Name: "Andy Streich",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        ReadMask: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.ChromemanagementCustomersTelemetryUsersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1TelemetryUser != nil {
        // handle response
    }
}
```

## ChromemanagementCustomersTelemetryUsersList

List all telemetry users.

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
    res, err := s.Customers.ChromemanagementCustomersTelemetryUsersList(ctx, operations.ChromemanagementCustomersTelemetryUsersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Filter: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        PageSize: sdk.Int64(647174),
        PageToken: sdk.String("distinctio"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        ReadMask: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.ChromemanagementCustomersTelemetryUsersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1ListTelemetryUsersResponse != nil {
        // handle response
    }
}
```
