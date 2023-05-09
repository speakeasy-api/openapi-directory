# Customers

### Available Operations

* [AndroiddeviceprovisioningCustomersConfigurationsCreate](#androiddeviceprovisioningcustomersconfigurationscreate) - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* [AndroiddeviceprovisioningCustomersConfigurationsDelete](#androiddeviceprovisioningcustomersconfigurationsdelete) - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* [AndroiddeviceprovisioningCustomersConfigurationsList](#androiddeviceprovisioningcustomersconfigurationslist) - Lists a customer's configurations.
* [AndroiddeviceprovisioningCustomersConfigurationsPatch](#androiddeviceprovisioningcustomersconfigurationspatch) - Updates a configuration's field values.
* [AndroiddeviceprovisioningCustomersDevicesApplyConfiguration](#androiddeviceprovisioningcustomersdevicesapplyconfiguration) - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* [AndroiddeviceprovisioningCustomersDevicesList](#androiddeviceprovisioningcustomersdeviceslist) - Lists a customer's devices.
* [AndroiddeviceprovisioningCustomersDevicesRemoveConfiguration](#androiddeviceprovisioningcustomersdevicesremoveconfiguration) - Removes a configuration from device.
* [AndroiddeviceprovisioningCustomersDevicesUnclaim](#androiddeviceprovisioningcustomersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* [AndroiddeviceprovisioningCustomersDpcsList](#androiddeviceprovisioningcustomersdpcslist) - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* [AndroiddeviceprovisioningCustomersList](#androiddeviceprovisioningcustomerslist) - Lists the user's customer accounts.

## AndroiddeviceprovisioningCustomersConfigurationsCreate

Creates a new configuration. Once created, a customer can apply the configuration to devices.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConfigurationInput: &shared.ConfigurationInput{
            CompanyName: sdk.String("molestiae"),
            ConfigurationName: sdk.String("minus"),
            ContactEmail: sdk.String("placeat"),
            ContactPhone: sdk.String("voluptatum"),
            CustomMessage: sdk.String("iusto"),
            DpcExtras: sdk.String("excepturi"),
            DpcResourcePath: sdk.String("nisi"),
            IsDefault: sdk.Bool(false),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersConfigurationsDelete

Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsDelete(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        Name: "Forrest Koepp",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersConfigurationsList

Lists a customer's configurations.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsList(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListConfigurationsResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersConfigurationsPatch

Updates a configuration's field values.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsPatch(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConfigurationInput: &shared.ConfigurationInput{
            CompanyName: sdk.String("cum"),
            ConfigurationName: sdk.String("esse"),
            ContactEmail: sdk.String("ipsum"),
            ContactPhone: sdk.String("excepturi"),
            CustomMessage: sdk.String("aspernatur"),
            DpcExtras: sdk.String("perferendis"),
            DpcResourcePath: sdk.String("ad"),
            IsDefault: sdk.Bool(false),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        Name: "May Turcotte",
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UpdateMask: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersDevicesApplyConfiguration

Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersDevicesApplyConfiguration(ctx, operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomerApplyConfigurationRequest: &shared.CustomerApplyConfigurationRequest{
            Configuration: sdk.String("ipsa"),
            Device: &shared.DeviceReference{
                DeviceID: sdk.String("reiciendis"),
                DeviceIdentifier: &shared.DeviceIdentifier{
                    ChromeOsAttestedDeviceID: sdk.String("est"),
                    DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                    Imei: sdk.String("laborum"),
                    Manufacturer: sdk.String("dolores"),
                    Meid: sdk.String("dolorem"),
                    Model: sdk.String("corporis"),
                    SerialNumber: sdk.String("explicabo"),
                },
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersDevicesList

Lists a customer's devices.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersDevicesList(ctx, operations.AndroiddeviceprovisioningCustomersDevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.String("mollitia"),
        PageToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListDevicesResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersDevicesRemoveConfiguration

Removes a configuration from device.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersDevicesRemoveConfiguration(ctx, operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomerRemoveConfigurationRequest: &shared.CustomerRemoveConfigurationRequest{
            Device: &shared.DeviceReference{
                DeviceID: sdk.String("error"),
                DeviceIdentifier: &shared.DeviceIdentifier{
                    ChromeOsAttestedDeviceID: sdk.String("quia"),
                    DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                    Imei: sdk.String("vitae"),
                    Manufacturer: sdk.String("laborum"),
                    Meid: sdk.String("animi"),
                    Model: sdk.String("enim"),
                    SerialNumber: sdk.String("odit"),
                },
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersDevicesUnclaim(ctx, operations.AndroiddeviceprovisioningCustomersDevicesUnclaimRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomerUnclaimDeviceRequest: &shared.CustomerUnclaimDeviceRequest{
            Device: &shared.DeviceReference{
                DeviceID: sdk.String("quasi"),
                DeviceIdentifier: &shared.DeviceIdentifier{
                    ChromeOsAttestedDeviceID: sdk.String("reiciendis"),
                    DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeChromeOs.ToPointer(),
                    Imei: sdk.String("vero"),
                    Manufacturer: sdk.String("nihil"),
                    Meid: sdk.String("praesentium"),
                    Model: sdk.String("voluptatibus"),
                    SerialNumber: sdk.String("ipsa"),
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        Parent: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersDpcsList

Lists the DPCs (device policy controllers) that support zero-touch enrollment.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersDpcsList(ctx, operations.AndroiddeviceprovisioningCustomersDpcsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListDpcsResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningCustomersList

Lists the user's customer accounts.

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
    res, err := s.Customers.AndroiddeviceprovisioningCustomersList(ctx, operations.AndroiddeviceprovisioningCustomersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        PageSize: sdk.Int64(93940),
        PageToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListCustomersResponse != nil {
        // handle response
    }
}
```
