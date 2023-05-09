# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateDeployedDevicesCertificate](#createdeployeddevicescertificate) - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* [CreateDeployedDevicesDeployment](#createdeployeddevicesdeployment) - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* [CreateDeployedDevicesDevice](#createdeployeddevicesdevice) - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* [CreateDeployedDevicesFleet](#createdeployeddevicesfleet) - Create a new Fleet for scoping of deployed devices within your account.
* [CreateDeployedDevicesKey](#createdeployeddeviceskey) - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* [CreateHostedNumbersAuthorizationDocument](#createhostednumbersauthorizationdocument) - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* [CreateHostedNumbersHostedNumberOrder](#createhostednumbershostednumberorder) - Host a phone number's capability on Twilio's platform.
* [CreateMarketplaceInstalledAddOn](#createmarketplaceinstalledaddon) - Install an Add-on for the Account specified.
* [CreateSyncDocument](#createsyncdocument)
* [CreateSyncService](#createsyncservice)
* [CreateSyncSyncList](#createsyncsynclist)
* [CreateSyncSyncListItem](#createsyncsynclistitem)
* [CreateSyncSyncMap](#createsyncsyncmap)
* [CreateSyncSyncMapItem](#createsyncsyncmapitem)
* [CreateUnderstandAssistant](#createunderstandassistant)
* [CreateUnderstandField](#createunderstandfield)
* [CreateUnderstandFieldType](#createunderstandfieldtype)
* [CreateUnderstandFieldValue](#createunderstandfieldvalue)
* [CreateUnderstandModelBuild](#createunderstandmodelbuild)
* [CreateUnderstandQuery](#createunderstandquery)
* [CreateUnderstandSample](#createunderstandsample)
* [CreateUnderstandTask](#createunderstandtask)
* [CreateWirelessCommand](#createwirelesscommand)
* [CreateWirelessRatePlan](#createwirelessrateplan)
* [DeleteDeployedDevicesCertificate](#deletedeployeddevicescertificate) - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [DeleteDeployedDevicesDeployment](#deletedeployeddevicesdeployment) - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* [DeleteDeployedDevicesDevice](#deletedeployeddevicesdevice) - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* [DeleteDeployedDevicesFleet](#deletedeployeddevicesfleet) - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* [DeleteDeployedDevicesKey](#deletedeployeddeviceskey) - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [DeleteHostedNumbersHostedNumberOrder](#deletehostednumbershostednumberorder) - Cancel the HostedNumberOrder (only available when the status is in `received`).
* [DeleteMarketplaceInstalledAddOn](#deletemarketplaceinstalledaddon) - Remove an Add-on installation from your account
* [DeleteSyncDocument](#deletesyncdocument)
* [DeleteSyncDocumentPermission](#deletesyncdocumentpermission) - Delete a specific Sync Document Permission.
* [DeleteSyncService](#deletesyncservice)
* [DeleteSyncSyncList](#deletesyncsynclist)
* [DeleteSyncSyncListItem](#deletesyncsynclistitem)
* [DeleteSyncSyncListPermission](#deletesyncsynclistpermission) - Delete a specific Sync List Permission.
* [DeleteSyncSyncMap](#deletesyncsyncmap)
* [DeleteSyncSyncMapItem](#deletesyncsyncmapitem)
* [DeleteSyncSyncMapPermission](#deletesyncsyncmappermission) - Delete a specific Sync Map Permission.
* [DeleteUnderstandAssistant](#deleteunderstandassistant)
* [DeleteUnderstandField](#deleteunderstandfield)
* [DeleteUnderstandFieldType](#deleteunderstandfieldtype)
* [DeleteUnderstandFieldValue](#deleteunderstandfieldvalue)
* [DeleteUnderstandModelBuild](#deleteunderstandmodelbuild)
* [DeleteUnderstandQuery](#deleteunderstandquery)
* [DeleteUnderstandSample](#deleteunderstandsample)
* [DeleteUnderstandTask](#deleteunderstandtask)
* [DeleteWirelessRatePlan](#deletewirelessrateplan)
* [FetchDeployedDevicesCertificate](#fetchdeployeddevicescertificate) - Fetch information about a specific Certificate credential in the Fleet.
* [FetchDeployedDevicesDeployment](#fetchdeployeddevicesdeployment) - Fetch information about a specific Deployment in the Fleet.
* [FetchDeployedDevicesDevice](#fetchdeployeddevicesdevice) - Fetch information about a specific Device in the Fleet.
* [FetchDeployedDevicesFleet](#fetchdeployeddevicesfleet) - Fetch information about a specific Fleet in your account.
* [FetchDeployedDevicesKey](#fetchdeployeddeviceskey) - Fetch information about a specific Key credential in the Fleet.
* [FetchHostedNumbersAuthorizationDocument](#fetchhostednumbersauthorizationdocument) - Fetch a specific AuthorizationDocument.
* [FetchHostedNumbersHostedNumberOrder](#fetchhostednumbershostednumberorder) - Fetch a specific HostedNumberOrder.
* [FetchMarketplaceAvailableAddOn](#fetchmarketplaceavailableaddon) - Fetch an instance of an Add-on currently available to be installed.
* [FetchMarketplaceAvailableAddOnExtension](#fetchmarketplaceavailableaddonextension) - Fetch an instance of an Extension for the Available Add-on.
* [FetchMarketplaceInstalledAddOn](#fetchmarketplaceinstalledaddon) - Fetch an instance of an Add-on currently installed on this Account.
* [FetchMarketplaceInstalledAddOnExtension](#fetchmarketplaceinstalledaddonextension) - Fetch an instance of an Extension for the Installed Add-on.
* [FetchSyncDocument](#fetchsyncdocument)
* [FetchSyncDocumentPermission](#fetchsyncdocumentpermission) - Fetch a specific Sync Document Permission.
* [FetchSyncService](#fetchsyncservice)
* [FetchSyncSyncList](#fetchsyncsynclist)
* [FetchSyncSyncListItem](#fetchsyncsynclistitem)
* [FetchSyncSyncListPermission](#fetchsyncsynclistpermission) - Fetch a specific Sync List Permission.
* [FetchSyncSyncMap](#fetchsyncsyncmap)
* [FetchSyncSyncMapItem](#fetchsyncsyncmapitem)
* [FetchSyncSyncMapPermission](#fetchsyncsyncmappermission) - Fetch a specific Sync Map Permission.
* [FetchUnderstandAssistant](#fetchunderstandassistant)
* [FetchUnderstandAssistantFallbackActions](#fetchunderstandassistantfallbackactions)
* [FetchUnderstandAssistantInitiationActions](#fetchunderstandassistantinitiationactions)
* [FetchUnderstandDialogue](#fetchunderstanddialogue)
* [FetchUnderstandField](#fetchunderstandfield)
* [FetchUnderstandFieldType](#fetchunderstandfieldtype)
* [FetchUnderstandFieldValue](#fetchunderstandfieldvalue)
* [FetchUnderstandModelBuild](#fetchunderstandmodelbuild)
* [FetchUnderstandQuery](#fetchunderstandquery)
* [FetchUnderstandSample](#fetchunderstandsample)
* [FetchUnderstandStyleSheet](#fetchunderstandstylesheet) - Returns Style sheet JSON object for this Assistant
* [FetchUnderstandTask](#fetchunderstandtask)
* [FetchUnderstandTaskActions](#fetchunderstandtaskactions) - Returns JSON actions for this Task.
* [FetchUnderstandTaskStatistics](#fetchunderstandtaskstatistics)
* [FetchWirelessCommand](#fetchwirelesscommand)
* [FetchWirelessRatePlan](#fetchwirelessrateplan)
* [FetchWirelessSim](#fetchwirelesssim)
* [FetchWirelessUsage](#fetchwirelessusage)
* [ListDeployedDevicesCertificate](#listdeployeddevicescertificate) - Retrieve a list of all Certificate credentials belonging to the Fleet.
* [ListDeployedDevicesDeployment](#listdeployeddevicesdeployment) - Retrieve a list of all Deployments belonging to the Fleet.
* [ListDeployedDevicesDevice](#listdeployeddevicesdevice) - Retrieve a list of all Devices belonging to the Fleet.
* [ListDeployedDevicesFleet](#listdeployeddevicesfleet) - Retrieve a list of all Fleets belonging to your account.
* [ListDeployedDevicesKey](#listdeployeddeviceskey) - Retrieve a list of all Keys credentials belonging to the Fleet.
* [ListHostedNumbersAuthorizationDocument](#listhostednumbersauthorizationdocument) - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* [ListHostedNumbersDependentHostedNumberOrder](#listhostednumbersdependenthostednumberorder) - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* [ListHostedNumbersHostedNumberOrder](#listhostednumbershostednumberorder) - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* [ListMarketplaceAvailableAddOn](#listmarketplaceavailableaddon) - Retrieve a list of Add-ons currently available to be installed.
* [ListMarketplaceAvailableAddOnExtension](#listmarketplaceavailableaddonextension) - Retrieve a list of Extensions for the Available Add-on.
* [ListMarketplaceInstalledAddOn](#listmarketplaceinstalledaddon) - Retrieve a list of Add-ons currently installed on this Account.
* [ListMarketplaceInstalledAddOnExtension](#listmarketplaceinstalledaddonextension) - Retrieve a list of Extensions for the Installed Add-on.
* [ListSyncDocument](#listsyncdocument)
* [ListSyncDocumentPermission](#listsyncdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [ListSyncService](#listsyncservice)
* [ListSyncSyncList](#listsyncsynclist)
* [ListSyncSyncListItem](#listsyncsynclistitem)
* [ListSyncSyncListPermission](#listsyncsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [ListSyncSyncMap](#listsyncsyncmap)
* [ListSyncSyncMapItem](#listsyncsyncmapitem)
* [ListSyncSyncMapPermission](#listsyncsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [ListUnderstandAssistant](#listunderstandassistant)
* [ListUnderstandField](#listunderstandfield)
* [ListUnderstandFieldType](#listunderstandfieldtype)
* [ListUnderstandFieldValue](#listunderstandfieldvalue)
* [ListUnderstandModelBuild](#listunderstandmodelbuild)
* [ListUnderstandQuery](#listunderstandquery)
* [ListUnderstandSample](#listunderstandsample)
* [ListUnderstandTask](#listunderstandtask)
* [ListWirelessCommand](#listwirelesscommand)
* [ListWirelessRatePlan](#listwirelessrateplan)
* [ListWirelessSim](#listwirelesssim)
* [UpdateDeployedDevicesCertificate](#updatedeployeddevicescertificate) - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* [UpdateDeployedDevicesDeployment](#updatedeployeddevicesdeployment) - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* [UpdateDeployedDevicesDevice](#updatedeployeddevicesdevice) - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* [UpdateDeployedDevicesFleet](#updatedeployeddevicesfleet) - Update the friendly name property of a specific Fleet in your account.
* [UpdateDeployedDevicesKey](#updatedeployeddeviceskey) - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* [UpdateHostedNumbersAuthorizationDocument](#updatehostednumbersauthorizationdocument) - Updates a specific AuthorizationDocument.
* [UpdateHostedNumbersHostedNumberOrder](#updatehostednumbershostednumberorder) - Updates a specific HostedNumberOrder.
* [UpdateMarketplaceInstalledAddOn](#updatemarketplaceinstalledaddon) - Update an Add-on installation for the Account specified.
* [UpdateMarketplaceInstalledAddOnExtension](#updatemarketplaceinstalledaddonextension) - Update an Extension for an Add-on installation.
* [UpdateSyncDocument](#updatesyncdocument)
* [UpdateSyncDocumentPermission](#updatesyncdocumentpermission) - Update an identity's access to a specific Sync Document.
* [UpdateSyncService](#updatesyncservice)
* [UpdateSyncSyncListItem](#updatesyncsynclistitem)
* [UpdateSyncSyncListPermission](#updatesyncsynclistpermission) - Update an identity's access to a specific Sync List.
* [UpdateSyncSyncMapItem](#updatesyncsyncmapitem)
* [UpdateSyncSyncMapPermission](#updatesyncsyncmappermission) - Update an identity's access to a specific Sync Map.
* [UpdateUnderstandAssistant](#updateunderstandassistant)
* [UpdateUnderstandAssistantFallbackActions](#updateunderstandassistantfallbackactions)
* [UpdateUnderstandAssistantInitiationActions](#updateunderstandassistantinitiationactions)
* [UpdateUnderstandFieldType](#updateunderstandfieldtype)
* [UpdateUnderstandModelBuild](#updateunderstandmodelbuild)
* [UpdateUnderstandQuery](#updateunderstandquery)
* [UpdateUnderstandSample](#updateunderstandsample)
* [UpdateUnderstandStyleSheet](#updateunderstandstylesheet) - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* [UpdateUnderstandTask](#updateunderstandtask)
* [UpdateUnderstandTaskActions](#updateunderstandtaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [UpdateWirelessRatePlan](#updatewirelessrateplan)
* [UpdateWirelessSim](#updatewirelesssim)

## CreateDeployedDevicesCertificate

Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeployedDevicesCertificate(ctx, operations.CreateDeployedDevicesCertificateRequest{
        FleetSid: "unde",
        RequestBody: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "nulla",
            DeviceSid: sdk.String("corrupti"),
            FriendlyName: sdk.String("illum"),
        },
    }, operations.CreateDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```

## CreateDeployedDevicesDeployment

Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeployedDevicesDeployment(ctx, operations.CreateDeployedDevicesDeploymentRequest{
        FleetSid: "vel",
        RequestBody: &operations.CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest{
            FriendlyName: sdk.String("error"),
            SyncServiceSid: sdk.String("deserunt"),
        },
    }, operations.CreateDeployedDevicesDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDeployment != nil {
        // handle response
    }
}
```

## CreateDeployedDevicesDevice

Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeployedDevicesDevice(ctx, operations.CreateDeployedDevicesDeviceRequest{
        FleetSid: "suscipit",
        RequestBody: &operations.CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest{
            DeploymentSid: sdk.String("iure"),
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("magnam"),
            Identity: sdk.String("debitis"),
            UniqueName: sdk.String("ipsa"),
        },
    }, operations.CreateDeployedDevicesDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDevice != nil {
        // handle response
    }
}
```

## CreateDeployedDevicesFleet

Create a new Fleet for scoping of deployed devices within your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeployedDevicesFleet(ctx, operations.CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest{
        FriendlyName: sdk.String("delectus"),
    }, operations.CreateDeployedDevicesFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleet != nil {
        // handle response
    }
}
```

## CreateDeployedDevicesKey

Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeployedDevicesKey(ctx, operations.CreateDeployedDevicesKeyRequest{
        FleetSid: "tempora",
        RequestBody: &operations.CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest{
            DeviceSid: sdk.String("suscipit"),
            FriendlyName: sdk.String("molestiae"),
        },
    }, operations.CreateDeployedDevicesKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetKey != nil {
        // handle response
    }
}
```

## CreateHostedNumbersAuthorizationDocument

Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateHostedNumbersAuthorizationDocument(ctx, operations.CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest{
        AddressSid: "minus",
        CcEmails: []string{
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
        },
        ContactPhoneNumber: "recusandae",
        ContactTitle: "temporibus",
        Email: "Ettie.Bogisich@gmail.com",
        HostedNumberOrderSids: []string{
            "repellendus",
            "sapiente",
        },
    }, operations.CreateHostedNumbersAuthorizationDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersAuthorizationDocument != nil {
        // handle response
    }
}
```

## CreateHostedNumbersHostedNumberOrder

Host a phone number's capability on Twilio's platform.

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
    res, err := s.SDK.CreateHostedNumbersHostedNumberOrder(ctx, operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest{
        AccountSid: sdk.String("quo"),
        AddressSid: sdk.String("odit"),
        CcEmails: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
        Email: sdk.String("Jakayla_Lebsack11@hotmail.com"),
        FriendlyName: sdk.String("nam"),
        PhoneNumber: "officia",
        SmsApplicationSid: sdk.String("occaecati"),
        SmsCapability: false,
        SmsFallbackMethod: operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumHead.ToPointer(),
        SmsFallbackURL: sdk.String("https://wasteful-route.name"),
        SmsMethod: operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumHead.ToPointer(),
        SmsURL: sdk.String("http://kosher-dipstick.biz"),
        StatusCallbackMethod: operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumPut.ToPointer(),
        StatusCallbackURL: sdk.String("https://jolly-cowboy.name"),
        UniqueName: sdk.String("aspernatur"),
        VerificationDocumentSid: sdk.String("perferendis"),
        VerificationType: shared.HostedNumberOrderEnumVerificationTypeEnumPhoneCall.ToPointer(),
    }, operations.CreateHostedNumbersHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersHostedNumberOrder != nil {
        // handle response
    }
}
```

## CreateMarketplaceInstalledAddOn

Install an Add-on for the Account specified.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMarketplaceInstalledAddOn(ctx, operations.CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest{
        AcceptTermsOfService: false,
        AvailableAddOnSid: "natus",
        Configuration: sdk.String("sed"),
        UniqueName: sdk.String("iste"),
    }, operations.CreateMarketplaceInstalledAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceInstalledAddOn != nil {
        // handle response
    }
}
```

## CreateSyncDocument

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncDocument(ctx, operations.CreateSyncDocumentRequest{
        RequestBody: &operations.CreateSyncDocumentCreateSyncDocumentRequest{
            Data: sdk.String("dolor"),
            UniqueName: sdk.String("natus"),
        },
        ServiceSid: "laboriosam",
    }, operations.CreateSyncDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceDocument != nil {
        // handle response
    }
}
```

## CreateSyncService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncService(ctx, operations.CreateSyncServiceCreateSyncServiceRequest{
        ACLEnabled: sdk.Bool(false),
        FriendlyName: sdk.String("hic"),
        ReachabilityWebhooksEnabled: sdk.Bool(false),
        WebhookURL: sdk.String("https://reckless-illustration.info"),
    }, operations.CreateSyncServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncService != nil {
        // handle response
    }
}
```

## CreateSyncSyncList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncSyncList(ctx, operations.CreateSyncSyncListRequest{
        RequestBody: &operations.CreateSyncSyncListCreateSyncSyncListRequest{
            UniqueName: sdk.String("iste"),
        },
        ServiceSid: "iure",
    }, operations.CreateSyncSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncList != nil {
        // handle response
    }
}
```

## CreateSyncSyncListItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncSyncListItem(ctx, operations.CreateSyncSyncListItemRequest{
        ListSid: "saepe",
        RequestBody: &operations.CreateSyncSyncListItemCreateSyncSyncListItemRequest{
            Data: "quidem",
        },
        ServiceSid: "architecto",
    }, operations.CreateSyncSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## CreateSyncSyncMap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncSyncMap(ctx, operations.CreateSyncSyncMapRequest{
        RequestBody: &operations.CreateSyncSyncMapCreateSyncSyncMapRequest{
            UniqueName: sdk.String("ipsa"),
        },
        ServiceSid: "reiciendis",
    }, operations.CreateSyncSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMap != nil {
        // handle response
    }
}
```

## CreateSyncSyncMapItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSyncSyncMapItem(ctx, operations.CreateSyncSyncMapItemRequest{
        MapSid: "est",
        RequestBody: &operations.CreateSyncSyncMapItemCreateSyncSyncMapItemRequest{
            Data: "mollitia",
            Key: "laborum",
        },
        ServiceSid: "dolores",
    }, operations.CreateSyncSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## CreateUnderstandAssistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandAssistant(ctx, operations.CreateUnderstandAssistantCreateUnderstandAssistantRequest{
        CallbackEvents: sdk.String("dolorem"),
        CallbackURL: sdk.String("http://colorless-ribbon.biz"),
        FallbackActions: sdk.String("omnis"),
        FriendlyName: sdk.String("nemo"),
        InitiationActions: sdk.String("minima"),
        LogQueries: sdk.Bool(false),
        StyleSheet: sdk.String("excepturi"),
        UniqueName: sdk.String("accusantium"),
    }, operations.CreateUnderstandAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistant != nil {
        // handle response
    }
}
```

## CreateUnderstandField

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandField(ctx, operations.CreateUnderstandFieldRequest{
        AssistantSid: "iure",
        RequestBody: &operations.CreateUnderstandFieldCreateUnderstandFieldRequest{
            FieldType: "culpa",
            UniqueName: "doloribus",
        },
        TaskSid: "sapiente",
    }, operations.CreateUnderstandFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskField != nil {
        // handle response
    }
}
```

## CreateUnderstandFieldType

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandFieldType(ctx, operations.CreateUnderstandFieldTypeRequest{
        AssistantSid: "architecto",
        RequestBody: &operations.CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest{
            FriendlyName: sdk.String("mollitia"),
            UniqueName: "dolorem",
        },
    }, operations.CreateUnderstandFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantFieldType != nil {
        // handle response
    }
}
```

## CreateUnderstandFieldValue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandFieldValue(ctx, operations.CreateUnderstandFieldValueRequest{
        AssistantSid: "culpa",
        FieldTypeSid: "consequuntur",
        RequestBody: &operations.CreateUnderstandFieldValueCreateUnderstandFieldValueRequest{
            Language: "repellat",
            SynonymOf: sdk.String("mollitia"),
            Value: "occaecati",
        },
    }, operations.CreateUnderstandFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantFieldTypeFieldValue != nil {
        // handle response
    }
}
```

## CreateUnderstandModelBuild

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandModelBuild(ctx, operations.CreateUnderstandModelBuildRequest{
        AssistantSid: "numquam",
        RequestBody: &operations.CreateUnderstandModelBuildCreateUnderstandModelBuildRequest{
            StatusCallback: sdk.String("http://kind-ironclad.biz"),
            UniqueName: sdk.String("error"),
        },
    }, operations.CreateUnderstandModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantModelBuild != nil {
        // handle response
    }
}
```

## CreateUnderstandQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandQuery(ctx, operations.CreateUnderstandQueryRequest{
        AssistantSid: "quia",
        RequestBody: &operations.CreateUnderstandQueryCreateUnderstandQueryRequest{
            Field: sdk.String("quis"),
            Language: "vitae",
            ModelBuild: sdk.String("laborum"),
            Query: "animi",
            Tasks: sdk.String("enim"),
        },
    }, operations.CreateUnderstandQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantQuery != nil {
        // handle response
    }
}
```

## CreateUnderstandSample

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandSample(ctx, operations.CreateUnderstandSampleRequest{
        AssistantSid: "odit",
        RequestBody: &operations.CreateUnderstandSampleCreateUnderstandSampleRequest{
            Language: "quo",
            SourceChannel: sdk.String("sequi"),
            TaggedText: "tenetur",
        },
        TaskSid: "ipsam",
    }, operations.CreateUnderstandSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskSample != nil {
        // handle response
    }
}
```

## CreateUnderstandTask

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUnderstandTask(ctx, operations.CreateUnderstandTaskRequest{
        AssistantSid: "id",
        RequestBody: &operations.CreateUnderstandTaskCreateUnderstandTaskRequest{
            Actions: sdk.String("possimus"),
            ActionsURL: sdk.String("http://bumpy-overview.org"),
            FriendlyName: sdk.String("laborum"),
            UniqueName: "quasi",
        },
    }, operations.CreateUnderstandTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTask != nil {
        // handle response
    }
}
```

## CreateWirelessCommand

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateWirelessCommand(ctx, operations.CreateWirelessCommandCreateWirelessCommandRequest{
        CallbackMethod: sdk.String("reiciendis"),
        CallbackURL: sdk.String("https://twin-intent.name"),
        Command: "voluptatibus",
        CommandMode: sdk.String("ipsa"),
        Device: sdk.String("omnis"),
        IncludeSid: sdk.String("voluptate"),
        Sim: sdk.String("cum"),
    }, operations.CreateWirelessCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessCommand != nil {
        // handle response
    }
}
```

## CreateWirelessRatePlan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateWirelessRatePlan(ctx, operations.CreateWirelessRatePlanCreateWirelessRatePlanRequest{
        CommandsEnabled: sdk.Bool(false),
        DataEnabled: sdk.Bool(false),
        DataLimit: sdk.Int64(19987),
        DataMetering: sdk.String("doloremque"),
        FriendlyName: sdk.String("reprehenderit"),
        InternationalRoaming: []string{
            "maiores",
            "dicta",
        },
        MessagingEnabled: sdk.Bool(false),
        NationalRoamingEnabled: sdk.Bool(false),
        UniqueName: sdk.String("corporis"),
        VoiceEnabled: sdk.Bool(false),
    }, operations.CreateWirelessRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessRatePlan != nil {
        // handle response
    }
}
```

## DeleteDeployedDevicesCertificate

Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployedDevicesCertificate(ctx, operations.DeleteDeployedDevicesCertificateRequest{
        FleetSid: "dolore",
        Sid: "iusto",
    }, operations.DeleteDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployedDevicesDeployment

Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployedDevicesDeployment(ctx, operations.DeleteDeployedDevicesDeploymentRequest{
        FleetSid: "dicta",
        Sid: "harum",
    }, operations.DeleteDeployedDevicesDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployedDevicesDevice

Delete a specific Device from the Fleet, also removing it from associated Deployments.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployedDevicesDevice(ctx, operations.DeleteDeployedDevicesDeviceRequest{
        FleetSid: "enim",
        Sid: "accusamus",
    }, operations.DeleteDeployedDevicesDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployedDevicesFleet

Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployedDevicesFleet(ctx, operations.DeleteDeployedDevicesFleetRequest{
        Sid: "commodi",
    }, operations.DeleteDeployedDevicesFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployedDevicesKey

Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployedDevicesKey(ctx, operations.DeleteDeployedDevicesKeyRequest{
        FleetSid: "repudiandae",
        Sid: "quae",
    }, operations.DeleteDeployedDevicesKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHostedNumbersHostedNumberOrder

Cancel the HostedNumberOrder (only available when the status is in `received`).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteHostedNumbersHostedNumberOrder(ctx, operations.DeleteHostedNumbersHostedNumberOrderRequest{
        Sid: "ipsum",
    }, operations.DeleteHostedNumbersHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMarketplaceInstalledAddOn

Remove an Add-on installation from your account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMarketplaceInstalledAddOn(ctx, operations.DeleteMarketplaceInstalledAddOnRequest{
        Sid: "quidem",
    }, operations.DeleteMarketplaceInstalledAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncDocument

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncDocument(ctx, operations.DeleteSyncDocumentRequest{
        ServiceSid: "molestias",
        Sid: "excepturi",
    }, operations.DeleteSyncDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncDocumentPermission

Delete a specific Sync Document Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncDocumentPermission(ctx, operations.DeleteSyncDocumentPermissionRequest{
        DocumentSid: "pariatur",
        Identity: "modi",
        ServiceSid: "praesentium",
    }, operations.DeleteSyncDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncService(ctx, operations.DeleteSyncServiceRequest{
        Sid: "rem",
    }, operations.DeleteSyncServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncList(ctx, operations.DeleteSyncSyncListRequest{
        ServiceSid: "voluptates",
        Sid: "quasi",
    }, operations.DeleteSyncSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncListItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncListItem(ctx, operations.DeleteSyncSyncListItemRequest{
        IfMatch: sdk.String("repudiandae"),
        Index: 575947,
        ListSid: "veritatis",
        ServiceSid: "itaque",
    }, operations.DeleteSyncSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncListPermission

Delete a specific Sync List Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncListPermission(ctx, operations.DeleteSyncSyncListPermissionRequest{
        Identity: "incidunt",
        ListSid: "enim",
        ServiceSid: "consequatur",
    }, operations.DeleteSyncSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncMap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncMap(ctx, operations.DeleteSyncSyncMapRequest{
        ServiceSid: "est",
        Sid: "quibusdam",
    }, operations.DeleteSyncSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncMapItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncMapItem(ctx, operations.DeleteSyncSyncMapItemRequest{
        IfMatch: sdk.String("explicabo"),
        Key: "deserunt",
        MapSid: "distinctio",
        ServiceSid: "quibusdam",
    }, operations.DeleteSyncSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSyncSyncMapPermission

Delete a specific Sync Map Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteSyncSyncMapPermission(ctx, operations.DeleteSyncSyncMapPermissionRequest{
        Identity: "labore",
        MapSid: "modi",
        ServiceSid: "qui",
    }, operations.DeleteSyncSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandAssistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandAssistant(ctx, operations.DeleteUnderstandAssistantRequest{
        Sid: "aliquid",
    }, operations.DeleteUnderstandAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandField

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandField(ctx, operations.DeleteUnderstandFieldRequest{
        AssistantSid: "cupiditate",
        Sid: "quos",
        TaskSid: "perferendis",
    }, operations.DeleteUnderstandFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandFieldType

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandFieldType(ctx, operations.DeleteUnderstandFieldTypeRequest{
        AssistantSid: "magni",
        Sid: "assumenda",
    }, operations.DeleteUnderstandFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandFieldValue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandFieldValue(ctx, operations.DeleteUnderstandFieldValueRequest{
        AssistantSid: "ipsam",
        FieldTypeSid: "alias",
        Sid: "fugit",
    }, operations.DeleteUnderstandFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandModelBuild

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandModelBuild(ctx, operations.DeleteUnderstandModelBuildRequest{
        AssistantSid: "dolorum",
        Sid: "excepturi",
    }, operations.DeleteUnderstandModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandQuery(ctx, operations.DeleteUnderstandQueryRequest{
        AssistantSid: "tempora",
        Sid: "facilis",
    }, operations.DeleteUnderstandQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandSample

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandSample(ctx, operations.DeleteUnderstandSampleRequest{
        AssistantSid: "tempore",
        Sid: "labore",
        TaskSid: "delectus",
    }, operations.DeleteUnderstandSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUnderstandTask

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUnderstandTask(ctx, operations.DeleteUnderstandTaskRequest{
        AssistantSid: "eum",
        Sid: "non",
    }, operations.DeleteUnderstandTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWirelessRatePlan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteWirelessRatePlan(ctx, operations.DeleteWirelessRatePlanRequest{
        Sid: "eligendi",
    }, operations.DeleteWirelessRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchDeployedDevicesCertificate

Fetch information about a specific Certificate credential in the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeployedDevicesCertificate(ctx, operations.FetchDeployedDevicesCertificateRequest{
        FleetSid: "sint",
        Sid: "aliquid",
    }, operations.FetchDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```

## FetchDeployedDevicesDeployment

Fetch information about a specific Deployment in the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeployedDevicesDeployment(ctx, operations.FetchDeployedDevicesDeploymentRequest{
        FleetSid: "provident",
        Sid: "necessitatibus",
    }, operations.FetchDeployedDevicesDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDeployment != nil {
        // handle response
    }
}
```

## FetchDeployedDevicesDevice

Fetch information about a specific Device in the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeployedDevicesDevice(ctx, operations.FetchDeployedDevicesDeviceRequest{
        FleetSid: "sint",
        Sid: "officia",
    }, operations.FetchDeployedDevicesDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDevice != nil {
        // handle response
    }
}
```

## FetchDeployedDevicesFleet

Fetch information about a specific Fleet in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeployedDevicesFleet(ctx, operations.FetchDeployedDevicesFleetRequest{
        Sid: "dolor",
    }, operations.FetchDeployedDevicesFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleet != nil {
        // handle response
    }
}
```

## FetchDeployedDevicesKey

Fetch information about a specific Key credential in the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeployedDevicesKey(ctx, operations.FetchDeployedDevicesKeyRequest{
        FleetSid: "debitis",
        Sid: "a",
    }, operations.FetchDeployedDevicesKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetKey != nil {
        // handle response
    }
}
```

## FetchHostedNumbersAuthorizationDocument

Fetch a specific AuthorizationDocument.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchHostedNumbersAuthorizationDocument(ctx, operations.FetchHostedNumbersAuthorizationDocumentRequest{
        Sid: "dolorum",
    }, operations.FetchHostedNumbersAuthorizationDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersAuthorizationDocument != nil {
        // handle response
    }
}
```

## FetchHostedNumbersHostedNumberOrder

Fetch a specific HostedNumberOrder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchHostedNumbersHostedNumberOrder(ctx, operations.FetchHostedNumbersHostedNumberOrderRequest{
        Sid: "in",
    }, operations.FetchHostedNumbersHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersHostedNumberOrder != nil {
        // handle response
    }
}
```

## FetchMarketplaceAvailableAddOn

Fetch an instance of an Add-on currently available to be installed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMarketplaceAvailableAddOn(ctx, operations.FetchMarketplaceAvailableAddOnRequest{
        Sid: "in",
    }, operations.FetchMarketplaceAvailableAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceAvailableAddOn != nil {
        // handle response
    }
}
```

## FetchMarketplaceAvailableAddOnExtension

Fetch an instance of an Extension for the Available Add-on.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMarketplaceAvailableAddOnExtension(ctx, operations.FetchMarketplaceAvailableAddOnExtensionRequest{
        AvailableAddOnSid: "illum",
        Sid: "maiores",
    }, operations.FetchMarketplaceAvailableAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension != nil {
        // handle response
    }
}
```

## FetchMarketplaceInstalledAddOn

Fetch an instance of an Add-on currently installed on this Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMarketplaceInstalledAddOn(ctx, operations.FetchMarketplaceInstalledAddOnRequest{
        Sid: "rerum",
    }, operations.FetchMarketplaceInstalledAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceInstalledAddOn != nil {
        // handle response
    }
}
```

## FetchMarketplaceInstalledAddOnExtension

Fetch an instance of an Extension for the Installed Add-on.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMarketplaceInstalledAddOnExtension(ctx, operations.FetchMarketplaceInstalledAddOnExtensionRequest{
        InstalledAddOnSid: "dicta",
        Sid: "magnam",
    }, operations.FetchMarketplaceInstalledAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension != nil {
        // handle response
    }
}
```

## FetchSyncDocument

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncDocument(ctx, operations.FetchSyncDocumentRequest{
        ServiceSid: "cumque",
        Sid: "facere",
    }, operations.FetchSyncDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceDocument != nil {
        // handle response
    }
}
```

## FetchSyncDocumentPermission

Fetch a specific Sync Document Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncDocumentPermission(ctx, operations.FetchSyncDocumentPermissionRequest{
        DocumentSid: "ea",
        Identity: "aliquid",
        ServiceSid: "laborum",
    }, operations.FetchSyncDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceDocumentDocumentPermission != nil {
        // handle response
    }
}
```

## FetchSyncService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncService(ctx, operations.FetchSyncServiceRequest{
        Sid: "accusamus",
    }, operations.FetchSyncServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncService != nil {
        // handle response
    }
}
```

## FetchSyncSyncList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncList(ctx, operations.FetchSyncSyncListRequest{
        ServiceSid: "non",
        Sid: "occaecati",
    }, operations.FetchSyncSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncList != nil {
        // handle response
    }
}
```

## FetchSyncSyncListItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncListItem(ctx, operations.FetchSyncSyncListItemRequest{
        Index: 313218,
        ListSid: "accusamus",
        ServiceSid: "delectus",
    }, operations.FetchSyncSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## FetchSyncSyncListPermission

Fetch a specific Sync List Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncListPermission(ctx, operations.FetchSyncSyncListPermissionRequest{
        Identity: "quidem",
        ListSid: "provident",
        ServiceSid: "nam",
    }, operations.FetchSyncSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncListSyncListPermission != nil {
        // handle response
    }
}
```

## FetchSyncSyncMap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncMap(ctx, operations.FetchSyncSyncMapRequest{
        ServiceSid: "id",
        Sid: "blanditiis",
    }, operations.FetchSyncSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMap != nil {
        // handle response
    }
}
```

## FetchSyncSyncMapItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncMapItem(ctx, operations.FetchSyncSyncMapItemRequest{
        Key: "deleniti",
        MapSid: "sapiente",
        ServiceSid: "amet",
    }, operations.FetchSyncSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## FetchSyncSyncMapPermission

Fetch a specific Sync Map Permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchSyncSyncMapPermission(ctx, operations.FetchSyncSyncMapPermissionRequest{
        Identity: "deserunt",
        MapSid: "nisi",
        ServiceSid: "vel",
    }, operations.FetchSyncSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMapSyncMapPermission != nil {
        // handle response
    }
}
```

## FetchUnderstandAssistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandAssistant(ctx, operations.FetchUnderstandAssistantRequest{
        Sid: "natus",
    }, operations.FetchUnderstandAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistant != nil {
        // handle response
    }
}
```

## FetchUnderstandAssistantFallbackActions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandAssistantFallbackActions(ctx, operations.FetchUnderstandAssistantFallbackActionsRequest{
        AssistantSid: "omnis",
    }, operations.FetchUnderstandAssistantFallbackActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantAssistantFallbackActions != nil {
        // handle response
    }
}
```

## FetchUnderstandAssistantInitiationActions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandAssistantInitiationActions(ctx, operations.FetchUnderstandAssistantInitiationActionsRequest{
        AssistantSid: "molestiae",
    }, operations.FetchUnderstandAssistantInitiationActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantAssistantInitiationActions != nil {
        // handle response
    }
}
```

## FetchUnderstandDialogue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandDialogue(ctx, operations.FetchUnderstandDialogueRequest{
        AssistantSid: "perferendis",
        Sid: "nihil",
    }, operations.FetchUnderstandDialogueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantDialogue != nil {
        // handle response
    }
}
```

## FetchUnderstandField

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandField(ctx, operations.FetchUnderstandFieldRequest{
        AssistantSid: "magnam",
        Sid: "distinctio",
        TaskSid: "id",
    }, operations.FetchUnderstandFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskField != nil {
        // handle response
    }
}
```

## FetchUnderstandFieldType

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandFieldType(ctx, operations.FetchUnderstandFieldTypeRequest{
        AssistantSid: "labore",
        Sid: "labore",
    }, operations.FetchUnderstandFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantFieldType != nil {
        // handle response
    }
}
```

## FetchUnderstandFieldValue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandFieldValue(ctx, operations.FetchUnderstandFieldValueRequest{
        AssistantSid: "suscipit",
        FieldTypeSid: "natus",
        Sid: "nobis",
    }, operations.FetchUnderstandFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantFieldTypeFieldValue != nil {
        // handle response
    }
}
```

## FetchUnderstandModelBuild

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandModelBuild(ctx, operations.FetchUnderstandModelBuildRequest{
        AssistantSid: "eum",
        Sid: "vero",
    }, operations.FetchUnderstandModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantModelBuild != nil {
        // handle response
    }
}
```

## FetchUnderstandQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandQuery(ctx, operations.FetchUnderstandQueryRequest{
        AssistantSid: "aspernatur",
        Sid: "architecto",
    }, operations.FetchUnderstandQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantQuery != nil {
        // handle response
    }
}
```

## FetchUnderstandSample

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandSample(ctx, operations.FetchUnderstandSampleRequest{
        AssistantSid: "magnam",
        Sid: "et",
        TaskSid: "excepturi",
    }, operations.FetchUnderstandSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskSample != nil {
        // handle response
    }
}
```

## FetchUnderstandStyleSheet

Returns Style sheet JSON object for this Assistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandStyleSheet(ctx, operations.FetchUnderstandStyleSheetRequest{
        AssistantSid: "ullam",
    }, operations.FetchUnderstandStyleSheetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantStyleSheet != nil {
        // handle response
    }
}
```

## FetchUnderstandTask

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandTask(ctx, operations.FetchUnderstandTaskRequest{
        AssistantSid: "provident",
        Sid: "quos",
    }, operations.FetchUnderstandTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTask != nil {
        // handle response
    }
}
```

## FetchUnderstandTaskActions

Returns JSON actions for this Task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandTaskActions(ctx, operations.FetchUnderstandTaskActionsRequest{
        AssistantSid: "sint",
        TaskSid: "accusantium",
    }, operations.FetchUnderstandTaskActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskTaskActions != nil {
        // handle response
    }
}
```

## FetchUnderstandTaskStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUnderstandTaskStatistics(ctx, operations.FetchUnderstandTaskStatisticsRequest{
        AssistantSid: "mollitia",
        TaskSid: "reiciendis",
    }, operations.FetchUnderstandTaskStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskTaskStatistics != nil {
        // handle response
    }
}
```

## FetchWirelessCommand

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWirelessCommand(ctx, operations.FetchWirelessCommandRequest{
        Sid: "mollitia",
    }, operations.FetchWirelessCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessCommand != nil {
        // handle response
    }
}
```

## FetchWirelessRatePlan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWirelessRatePlan(ctx, operations.FetchWirelessRatePlanRequest{
        Sid: "ad",
    }, operations.FetchWirelessRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessRatePlan != nil {
        // handle response
    }
}
```

## FetchWirelessSim

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWirelessSim(ctx, operations.FetchWirelessSimRequest{
        Sid: "eum",
    }, operations.FetchWirelessSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessSim != nil {
        // handle response
    }
}
```

## FetchWirelessUsage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWirelessUsage(ctx, operations.FetchWirelessUsageRequest{
        End: sdk.String("dolor"),
        SimSid: "necessitatibus",
        Start: sdk.String("odit"),
    }, operations.FetchWirelessUsageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessSimUsage != nil {
        // handle response
    }
}
```

## ListDeployedDevicesCertificate

Retrieve a list of all Certificate credentials belonging to the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeployedDevicesCertificate(ctx, operations.ListDeployedDevicesCertificateRequest{
        DeviceSid: sdk.String("nemo"),
        FleetSid: "quasi",
        Page: sdk.Int64(435865),
        PageSize: sdk.Int64(984043),
        PageToken: sdk.String("debitis"),
    }, operations.ListDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeployedDevicesCertificateResponse != nil {
        // handle response
    }
}
```

## ListDeployedDevicesDeployment

Retrieve a list of all Deployments belonging to the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeployedDevicesDeployment(ctx, operations.ListDeployedDevicesDeploymentRequest{
        FleetSid: "eius",
        Page: sdk.Int64(806194),
        PageSize: sdk.Int64(537023),
        PageToken: sdk.String("facilis"),
    }, operations.ListDeployedDevicesDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeployedDevicesDeploymentResponse != nil {
        // handle response
    }
}
```

## ListDeployedDevicesDevice

Retrieve a list of all Devices belonging to the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeployedDevicesDevice(ctx, operations.ListDeployedDevicesDeviceRequest{
        DeploymentSid: sdk.String("in"),
        FleetSid: "architecto",
        Page: sdk.Int64(99569),
        PageSize: sdk.Int64(919483),
        PageToken: sdk.String("ullam"),
    }, operations.ListDeployedDevicesDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeployedDevicesDeviceResponse != nil {
        // handle response
    }
}
```

## ListDeployedDevicesFleet

Retrieve a list of all Fleets belonging to your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeployedDevicesFleet(ctx, operations.ListDeployedDevicesFleetRequest{
        Page: sdk.Int64(714242),
        PageSize: sdk.Int64(469249),
        PageToken: sdk.String("repellat"),
    }, operations.ListDeployedDevicesFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeployedDevicesFleetResponse != nil {
        // handle response
    }
}
```

## ListDeployedDevicesKey

Retrieve a list of all Keys credentials belonging to the Fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeployedDevicesKey(ctx, operations.ListDeployedDevicesKeyRequest{
        DeviceSid: sdk.String("quibusdam"),
        FleetSid: "sed",
        Page: sdk.Int64(904648),
        PageSize: sdk.Int64(868126),
        PageToken: sdk.String("accusantium"),
    }, operations.ListDeployedDevicesKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeployedDevicesKeyResponse != nil {
        // handle response
    }
}
```

## ListHostedNumbersAuthorizationDocument

Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.

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
    res, err := s.SDK.ListHostedNumbersAuthorizationDocument(ctx, operations.ListHostedNumbersAuthorizationDocumentRequest{
        Email: sdk.String("Johan12@gmail.com"),
        Page: sdk.Int64(779051),
        PageSize: sdk.Int64(848009),
        PageToken: sdk.String("pariatur"),
        Status: shared.AuthorizationDocumentEnumStatusEnumFailed.ToPointer(),
    }, operations.ListHostedNumbersAuthorizationDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHostedNumbersAuthorizationDocumentResponse != nil {
        // handle response
    }
}
```

## ListHostedNumbersDependentHostedNumberOrder

Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.

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
    res, err := s.SDK.ListHostedNumbersDependentHostedNumberOrder(ctx, operations.ListHostedNumbersDependentHostedNumberOrderRequest{
        FriendlyName: sdk.String("ea"),
        IncomingPhoneNumberSid: sdk.String("excepturi"),
        Page: sdk.Int64(139972),
        PageSize: sdk.Int64(407183),
        PageToken: sdk.String("accusantium"),
        PhoneNumber: sdk.String("ab"),
        SigningDocumentSid: "maiores",
        Status: shared.DependentHostedNumberOrderEnumStatusEnumCompleted.ToPointer(),
        UniqueName: sdk.String("ipsam"),
    }, operations.ListHostedNumbersDependentHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHostedNumbersDependentHostedNumberOrderResponse != nil {
        // handle response
    }
}
```

## ListHostedNumbersHostedNumberOrder

Retrieve a list of HostedNumberOrders belonging to the account initiating the request.

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
    res, err := s.SDK.ListHostedNumbersHostedNumberOrder(ctx, operations.ListHostedNumbersHostedNumberOrderRequest{
        FriendlyName: sdk.String("voluptate"),
        IncomingPhoneNumberSid: sdk.String("autem"),
        Page: sdk.Int64(722056),
        PageSize: sdk.Int64(50588),
        PageToken: sdk.String("pariatur"),
        PhoneNumber: sdk.String("nemo"),
        Status: shared.HostedNumberOrderEnumStatusEnumActionRequired.ToPointer(),
        UniqueName: sdk.String("perferendis"),
    }, operations.ListHostedNumbersHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHostedNumbersHostedNumberOrderResponse != nil {
        // handle response
    }
}
```

## ListMarketplaceAvailableAddOn

Retrieve a list of Add-ons currently available to be installed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMarketplaceAvailableAddOn(ctx, operations.ListMarketplaceAvailableAddOnRequest{
        Page: sdk.Int64(855804),
        PageSize: sdk.Int64(230742),
        PageToken: sdk.String("aut"),
    }, operations.ListMarketplaceAvailableAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMarketplaceAvailableAddOnResponse != nil {
        // handle response
    }
}
```

## ListMarketplaceAvailableAddOnExtension

Retrieve a list of Extensions for the Available Add-on.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMarketplaceAvailableAddOnExtension(ctx, operations.ListMarketplaceAvailableAddOnExtensionRequest{
        AvailableAddOnSid: "cumque",
        Page: sdk.Int64(359978),
        PageSize: sdk.Int64(944124),
        PageToken: sdk.String("libero"),
    }, operations.ListMarketplaceAvailableAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMarketplaceAvailableAddOnExtensionResponse != nil {
        // handle response
    }
}
```

## ListMarketplaceInstalledAddOn

Retrieve a list of Add-ons currently installed on this Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMarketplaceInstalledAddOn(ctx, operations.ListMarketplaceInstalledAddOnRequest{
        Page: sdk.Int64(749999),
        PageSize: sdk.Int64(171629),
        PageToken: sdk.String("quis"),
    }, operations.ListMarketplaceInstalledAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMarketplaceInstalledAddOnResponse != nil {
        // handle response
    }
}
```

## ListMarketplaceInstalledAddOnExtension

Retrieve a list of Extensions for the Installed Add-on.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMarketplaceInstalledAddOnExtension(ctx, operations.ListMarketplaceInstalledAddOnExtensionRequest{
        InstalledAddOnSid: "totam",
        Page: sdk.Int64(489549),
        PageSize: sdk.Int64(54338),
        PageToken: sdk.String("quis"),
    }, operations.ListMarketplaceInstalledAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMarketplaceInstalledAddOnExtensionResponse != nil {
        // handle response
    }
}
```

## ListSyncDocument

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncDocument(ctx, operations.ListSyncDocumentRequest{
        Page: sdk.Int64(199996),
        PageSize: sdk.Int64(179490),
        PageToken: sdk.String("perferendis"),
        ServiceSid: "dolores",
    }, operations.ListSyncDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncDocumentResponse != nil {
        // handle response
    }
}
```

## ListSyncDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncDocumentPermission(ctx, operations.ListSyncDocumentPermissionRequest{
        DocumentSid: "minus",
        Page: sdk.Int64(463451),
        PageSize: sdk.Int64(223924),
        PageToken: sdk.String("vero"),
        ServiceSid: "nostrum",
    }, operations.ListSyncDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncDocumentPermissionResponse != nil {
        // handle response
    }
}
```

## ListSyncService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncService(ctx, operations.ListSyncServiceRequest{
        Page: sdk.Int64(944120),
        PageSize: sdk.Int64(928082),
        PageToken: sdk.String("omnis"),
    }, operations.ListSyncServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncServiceResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncSyncList(ctx, operations.ListSyncSyncListRequest{
        Page: sdk.Int64(704415),
        PageSize: sdk.Int64(596656),
        PageToken: sdk.String("voluptatem"),
        ServiceSid: "porro",
    }, operations.ListSyncSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncListResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncListItem

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
    res, err := s.SDK.ListSyncSyncListItem(ctx, operations.ListSyncSyncListItemRequest{
        Bounds: shared.SyncListItemEnumQueryFromBoundTypeEnumInclusive.ToPointer(),
        From: sdk.String("blanditiis"),
        ListSid: "error",
        Order: shared.SyncListItemEnumQueryResultOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(577229),
        PageSize: sdk.Int64(699098),
        PageToken: sdk.String("adipisci"),
        ServiceSid: "asperiores",
    }, operations.ListSyncSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncListItemResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncSyncListPermission(ctx, operations.ListSyncSyncListPermissionRequest{
        ListSid: "earum",
        Page: sdk.Int64(267262),
        PageSize: sdk.Int64(613966),
        PageToken: sdk.String("dolorum"),
        ServiceSid: "deleniti",
    }, operations.ListSyncSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncListPermissionResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncMap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncSyncMap(ctx, operations.ListSyncSyncMapRequest{
        Page: sdk.Int64(864282),
        PageSize: sdk.Int64(589910),
        PageToken: sdk.String("nobis"),
        ServiceSid: "libero",
    }, operations.ListSyncSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncMapResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncMapItem

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
    res, err := s.SDK.ListSyncSyncMapItem(ctx, operations.ListSyncSyncMapItemRequest{
        Bounds: shared.SyncMapItemEnumQueryFromBoundTypeEnumExclusive.ToPointer(),
        From: sdk.String("quaerat"),
        MapSid: "quos",
        Order: shared.SyncMapItemEnumQueryResultOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(212390),
        PageSize: sdk.Int64(209843),
        PageToken: sdk.String("dolor"),
        ServiceSid: "qui",
    }, operations.ListSyncSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncMapItemResponse != nil {
        // handle response
    }
}
```

## ListSyncSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListSyncSyncMapPermission(ctx, operations.ListSyncSyncMapPermissionRequest{
        MapSid: "ipsum",
        Page: sdk.Int64(944373),
        PageSize: sdk.Int64(569574),
        PageToken: sdk.String("cum"),
        ServiceSid: "voluptate",
    }, operations.ListSyncSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncSyncMapPermissionResponse != nil {
        // handle response
    }
}
```

## ListUnderstandAssistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandAssistant(ctx, operations.ListUnderstandAssistantRequest{
        Page: sdk.Int64(490459),
        PageSize: sdk.Int64(970237),
        PageToken: sdk.String("amet"),
    }, operations.ListUnderstandAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandAssistantResponse != nil {
        // handle response
    }
}
```

## ListUnderstandField

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandField(ctx, operations.ListUnderstandFieldRequest{
        AssistantSid: "dolorum",
        Page: sdk.Int64(254356),
        PageSize: sdk.Int64(85295),
        PageToken: sdk.String("ipsa"),
        TaskSid: "ipsa",
    }, operations.ListUnderstandFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandFieldResponse != nil {
        // handle response
    }
}
```

## ListUnderstandFieldType

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandFieldType(ctx, operations.ListUnderstandFieldTypeRequest{
        AssistantSid: "iure",
        Page: sdk.Int64(487838),
        PageSize: sdk.Int64(311796),
        PageToken: sdk.String("accusamus"),
    }, operations.ListUnderstandFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandFieldTypeResponse != nil {
        // handle response
    }
}
```

## ListUnderstandFieldValue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandFieldValue(ctx, operations.ListUnderstandFieldValueRequest{
        AssistantSid: "quidem",
        FieldTypeSid: "voluptatibus",
        Language: sdk.String("voluptas"),
        Page: sdk.Int64(617658),
        PageSize: sdk.Int64(179603),
        PageToken: sdk.String("atque"),
    }, operations.ListUnderstandFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandFieldValueResponse != nil {
        // handle response
    }
}
```

## ListUnderstandModelBuild

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandModelBuild(ctx, operations.ListUnderstandModelBuildRequest{
        AssistantSid: "sit",
        Page: sdk.Int64(854614),
        PageSize: sdk.Int64(67249),
        PageToken: sdk.String("soluta"),
    }, operations.ListUnderstandModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandModelBuildResponse != nil {
        // handle response
    }
}
```

## ListUnderstandQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandQuery(ctx, operations.ListUnderstandQueryRequest{
        AssistantSid: "dolorum",
        Language: sdk.String("iusto"),
        ModelBuild: sdk.String("voluptate"),
        Page: sdk.Int64(677082),
        PageSize: sdk.Int64(536579),
        PageToken: sdk.String("omnis"),
        Status: sdk.String("necessitatibus"),
    }, operations.ListUnderstandQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandQueryResponse != nil {
        // handle response
    }
}
```

## ListUnderstandSample

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandSample(ctx, operations.ListUnderstandSampleRequest{
        AssistantSid: "distinctio",
        Language: sdk.String("asperiores"),
        Page: sdk.Int64(469497),
        PageSize: sdk.Int64(216897),
        PageToken: sdk.String("voluptate"),
        TaskSid: "id",
    }, operations.ListUnderstandSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandSampleResponse != nil {
        // handle response
    }
}
```

## ListUnderstandTask

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUnderstandTask(ctx, operations.ListUnderstandTaskRequest{
        AssistantSid: "saepe",
        Page: sdk.Int64(263322),
        PageSize: sdk.Int64(137220),
        PageToken: sdk.String("perferendis"),
    }, operations.ListUnderstandTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnderstandTaskResponse != nil {
        // handle response
    }
}
```

## ListWirelessCommand

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListWirelessCommand(ctx, operations.ListWirelessCommandRequest{
        Device: sdk.String("amet"),
        Direction: sdk.String("optio"),
        Page: sdk.Int64(881586),
        PageSize: sdk.Int64(320017),
        PageToken: sdk.String("saepe"),
        Sim: sdk.String("suscipit"),
        Status: sdk.String("deserunt"),
    }, operations.ListWirelessCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWirelessCommandResponse != nil {
        // handle response
    }
}
```

## ListWirelessRatePlan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListWirelessRatePlan(ctx, operations.ListWirelessRatePlanRequest{
        Page: sdk.Int64(588317),
        PageSize: sdk.Int64(324683),
        PageToken: sdk.String("repellendus"),
    }, operations.ListWirelessRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWirelessRatePlanResponse != nil {
        // handle response
    }
}
```

## ListWirelessSim

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListWirelessSim(ctx, operations.ListWirelessSimRequest{
        EID: sdk.String("totam"),
        Iccid: sdk.String("similique"),
        Page: sdk.Int64(55),
        PageSize: sdk.Int64(872651),
        PageToken: sdk.String("quaerat"),
        RatePlan: sdk.String("tempora"),
        SimRegistrationCode: sdk.String("vel"),
        Status: sdk.String("quod"),
    }, operations.ListWirelessSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWirelessSimResponse != nil {
        // handle response
    }
}
```

## UpdateDeployedDevicesCertificate

Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployedDevicesCertificate(ctx, operations.UpdateDeployedDevicesCertificateRequest{
        FleetSid: "officiis",
        RequestBody: &operations.UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest{
            DeviceSid: sdk.String("qui"),
            FriendlyName: sdk.String("dolorum"),
        },
        Sid: "a",
    }, operations.UpdateDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```

## UpdateDeployedDevicesDeployment

Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployedDevicesDeployment(ctx, operations.UpdateDeployedDevicesDeploymentRequest{
        FleetSid: "esse",
        RequestBody: &operations.UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest{
            FriendlyName: sdk.String("harum"),
            SyncServiceSid: sdk.String("iusto"),
        },
        Sid: "ipsum",
    }, operations.UpdateDeployedDevicesDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDeployment != nil {
        // handle response
    }
}
```

## UpdateDeployedDevicesDevice

Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployedDevicesDevice(ctx, operations.UpdateDeployedDevicesDeviceRequest{
        FleetSid: "quisquam",
        RequestBody: &operations.UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest{
            DeploymentSid: sdk.String("tenetur"),
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("amet"),
            Identity: sdk.String("tempore"),
        },
        Sid: "accusamus",
    }, operations.UpdateDeployedDevicesDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetDevice != nil {
        // handle response
    }
}
```

## UpdateDeployedDevicesFleet

Update the friendly name property of a specific Fleet in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployedDevicesFleet(ctx, operations.UpdateDeployedDevicesFleetRequest{
        RequestBody: &operations.UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest{
            DefaultDeploymentSid: sdk.String("numquam"),
            FriendlyName: sdk.String("enim"),
        },
        Sid: "dolorem",
    }, operations.UpdateDeployedDevicesFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleet != nil {
        // handle response
    }
}
```

## UpdateDeployedDevicesKey

Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployedDevicesKey(ctx, operations.UpdateDeployedDevicesKeyRequest{
        FleetSid: "sapiente",
        RequestBody: &operations.UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest{
            DeviceSid: sdk.String("totam"),
            FriendlyName: sdk.String("nihil"),
        },
        Sid: "sit",
    }, operations.UpdateDeployedDevicesKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetKey != nil {
        // handle response
    }
}
```

## UpdateHostedNumbersAuthorizationDocument

Updates a specific AuthorizationDocument.

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
    res, err := s.SDK.UpdateHostedNumbersAuthorizationDocument(ctx, operations.UpdateHostedNumbersAuthorizationDocumentRequest{
        RequestBody: &operations.UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest{
            AddressSid: sdk.String("expedita"),
            CcEmails: []string{
                "sed",
            },
            ContactPhoneNumber: sdk.String("vel"),
            ContactTitle: sdk.String("libero"),
            Email: sdk.String("Lura27@yahoo.com"),
            HostedNumberOrderSids: []string{
                "cupiditate",
            },
            Status: shared.AuthorizationDocumentEnumStatusEnumFailed.ToPointer(),
        },
        Sid: "pariatur",
    }, operations.UpdateHostedNumbersAuthorizationDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersAuthorizationDocument != nil {
        // handle response
    }
}
```

## UpdateHostedNumbersHostedNumberOrder

Updates a specific HostedNumberOrder.

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
    res, err := s.SDK.UpdateHostedNumbersHostedNumberOrder(ctx, operations.UpdateHostedNumbersHostedNumberOrderRequest{
        RequestBody: &operations.UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest{
            CallDelay: sdk.Int64(747080),
            CcEmails: []string{
                "laborum",
            },
            Email: sdk.String("Doyle71@yahoo.com"),
            Extension: sdk.String("facilis"),
            FriendlyName: sdk.String("aliquid"),
            Status: shared.HostedNumberOrderEnumStatusEnumCarrierProcessing.ToPointer(),
            UniqueName: sdk.String("molestias"),
            VerificationCode: sdk.String("temporibus"),
            VerificationDocumentSid: sdk.String("qui"),
            VerificationType: shared.HostedNumberOrderEnumVerificationTypeEnumPhoneCall.ToPointer(),
        },
        Sid: "fugit",
    }, operations.UpdateHostedNumbersHostedNumberOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewHostedNumbersHostedNumberOrder != nil {
        // handle response
    }
}
```

## UpdateMarketplaceInstalledAddOn

Update an Add-on installation for the Account specified.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMarketplaceInstalledAddOn(ctx, operations.UpdateMarketplaceInstalledAddOnRequest{
        RequestBody: &operations.UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest{
            Configuration: sdk.String("magni"),
            UniqueName: sdk.String("odio"),
        },
        Sid: "sunt",
    }, operations.UpdateMarketplaceInstalledAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceInstalledAddOn != nil {
        // handle response
    }
}
```

## UpdateMarketplaceInstalledAddOnExtension

Update an Extension for an Add-on installation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMarketplaceInstalledAddOnExtension(ctx, operations.UpdateMarketplaceInstalledAddOnExtensionRequest{
        InstalledAddOnSid: "ullam",
        RequestBody: &operations.UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest{
            Enabled: false,
        },
        Sid: "nam",
    }, operations.UpdateMarketplaceInstalledAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension != nil {
        // handle response
    }
}
```

## UpdateSyncDocument

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncDocument(ctx, operations.UpdateSyncDocumentRequest{
        IfMatch: sdk.String("hic"),
        RequestBody: &operations.UpdateSyncDocumentUpdateSyncDocumentRequest{
            Data: "voluptatem",
        },
        ServiceSid: "cumque",
        Sid: "soluta",
    }, operations.UpdateSyncDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceDocument != nil {
        // handle response
    }
}
```

## UpdateSyncDocumentPermission

Update an identity's access to a specific Sync Document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncDocumentPermission(ctx, operations.UpdateSyncDocumentPermissionRequest{
        DocumentSid: "nobis",
        Identity: "et",
        RequestBody: &operations.UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "saepe",
    }, operations.UpdateSyncDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceDocumentDocumentPermission != nil {
        // handle response
    }
}
```

## UpdateSyncService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncService(ctx, operations.UpdateSyncServiceRequest{
        RequestBody: &operations.UpdateSyncServiceUpdateSyncServiceRequest{
            ACLEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("ipsum"),
            ReachabilityWebhooksEnabled: sdk.Bool(false),
            WebhookURL: sdk.String("http://shrill-medium.net"),
        },
        Sid: "cupiditate",
    }, operations.UpdateSyncServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncService != nil {
        // handle response
    }
}
```

## UpdateSyncSyncListItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncSyncListItem(ctx, operations.UpdateSyncSyncListItemRequest{
        IfMatch: sdk.String("aperiam"),
        Index: 961937,
        ListSid: "dolorem",
        RequestBody: &operations.UpdateSyncSyncListItemUpdateSyncSyncListItemRequest{
            Data: "dolore",
        },
        ServiceSid: "labore",
    }, operations.UpdateSyncSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## UpdateSyncSyncListPermission

Update an identity's access to a specific Sync List.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncSyncListPermission(ctx, operations.UpdateSyncSyncListPermissionRequest{
        Identity: "adipisci",
        ListSid: "dolorum",
        RequestBody: &operations.UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "architecto",
    }, operations.UpdateSyncSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncListSyncListPermission != nil {
        // handle response
    }
}
```

## UpdateSyncSyncMapItem

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncSyncMapItem(ctx, operations.UpdateSyncSyncMapItemRequest{
        IfMatch: sdk.String("quae"),
        Key: "aut",
        MapSid: "quas",
        RequestBody: &operations.UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest{
            Data: "itaque",
        },
        ServiceSid: "consequatur",
    }, operations.UpdateSyncSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## UpdateSyncSyncMapPermission

Update an identity's access to a specific Sync Map.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSyncSyncMapPermission(ctx, operations.UpdateSyncSyncMapPermissionRequest{
        Identity: "est",
        MapSid: "repellendus",
        RequestBody: &operations.UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "porro",
    }, operations.UpdateSyncSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewSyncServiceSyncMapSyncMapPermission != nil {
        // handle response
    }
}
```

## UpdateUnderstandAssistant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandAssistant(ctx, operations.UpdateUnderstandAssistantRequest{
        RequestBody: &operations.UpdateUnderstandAssistantUpdateUnderstandAssistantRequest{
            CallbackEvents: sdk.String("doloribus"),
            CallbackURL: sdk.String("http://rosy-nanoparticle.biz"),
            FallbackActions: sdk.String("quae"),
            FriendlyName: sdk.String("laudantium"),
            InitiationActions: sdk.String("odio"),
            LogQueries: sdk.Bool(false),
            StyleSheet: sdk.String("occaecati"),
            UniqueName: sdk.String("voluptatibus"),
        },
        Sid: "quisquam",
    }, operations.UpdateUnderstandAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistant != nil {
        // handle response
    }
}
```

## UpdateUnderstandAssistantFallbackActions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandAssistantFallbackActions(ctx, operations.UpdateUnderstandAssistantFallbackActionsRequest{
        AssistantSid: "vero",
        RequestBody: &operations.UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest{
            FallbackActions: sdk.String("omnis"),
        },
    }, operations.UpdateUnderstandAssistantFallbackActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantAssistantFallbackActions != nil {
        // handle response
    }
}
```

## UpdateUnderstandAssistantInitiationActions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandAssistantInitiationActions(ctx, operations.UpdateUnderstandAssistantInitiationActionsRequest{
        AssistantSid: "quis",
        RequestBody: &operations.UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest{
            InitiationActions: sdk.String("ipsum"),
        },
    }, operations.UpdateUnderstandAssistantInitiationActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantAssistantInitiationActions != nil {
        // handle response
    }
}
```

## UpdateUnderstandFieldType

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandFieldType(ctx, operations.UpdateUnderstandFieldTypeRequest{
        AssistantSid: "delectus",
        RequestBody: &operations.UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest{
            FriendlyName: sdk.String("voluptate"),
            UniqueName: sdk.String("consectetur"),
        },
        Sid: "vero",
    }, operations.UpdateUnderstandFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantFieldType != nil {
        // handle response
    }
}
```

## UpdateUnderstandModelBuild

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandModelBuild(ctx, operations.UpdateUnderstandModelBuildRequest{
        AssistantSid: "tenetur",
        RequestBody: &operations.UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest{
            UniqueName: sdk.String("dignissimos"),
        },
        Sid: "hic",
    }, operations.UpdateUnderstandModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantModelBuild != nil {
        // handle response
    }
}
```

## UpdateUnderstandQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandQuery(ctx, operations.UpdateUnderstandQueryRequest{
        AssistantSid: "distinctio",
        RequestBody: &operations.UpdateUnderstandQueryUpdateUnderstandQueryRequest{
            SampleSid: sdk.String("quod"),
            Status: sdk.String("odio"),
        },
        Sid: "similique",
    }, operations.UpdateUnderstandQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantQuery != nil {
        // handle response
    }
}
```

## UpdateUnderstandSample

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandSample(ctx, operations.UpdateUnderstandSampleRequest{
        AssistantSid: "facilis",
        RequestBody: &operations.UpdateUnderstandSampleUpdateUnderstandSampleRequest{
            Language: sdk.String("vero"),
            SourceChannel: sdk.String("ducimus"),
            TaggedText: sdk.String("dolore"),
        },
        Sid: "quibusdam",
        TaskSid: "illum",
    }, operations.UpdateUnderstandSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskSample != nil {
        // handle response
    }
}
```

## UpdateUnderstandStyleSheet

Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandStyleSheet(ctx, operations.UpdateUnderstandStyleSheetRequest{
        AssistantSid: "sequi",
        RequestBody: &operations.UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest{
            StyleSheet: sdk.String("natus"),
        },
    }, operations.UpdateUnderstandStyleSheetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantStyleSheet != nil {
        // handle response
    }
}
```

## UpdateUnderstandTask

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandTask(ctx, operations.UpdateUnderstandTaskRequest{
        AssistantSid: "impedit",
        RequestBody: &operations.UpdateUnderstandTaskUpdateUnderstandTaskRequest{
            Actions: sdk.String("aut"),
            ActionsURL: sdk.String("https://grateful-stumbling.com"),
            FriendlyName: sdk.String("porro"),
            UniqueName: sdk.String("maiores"),
        },
        Sid: "doloribus",
    }, operations.UpdateUnderstandTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTask != nil {
        // handle response
    }
}
```

## UpdateUnderstandTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUnderstandTaskActions(ctx, operations.UpdateUnderstandTaskActionsRequest{
        AssistantSid: "iusto",
        RequestBody: &operations.UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest{
            Actions: sdk.String("eligendi"),
        },
        TaskSid: "ducimus",
    }, operations.UpdateUnderstandTaskActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewUnderstandAssistantTaskTaskActions != nil {
        // handle response
    }
}
```

## UpdateWirelessRatePlan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateWirelessRatePlan(ctx, operations.UpdateWirelessRatePlanRequest{
        RequestBody: &operations.UpdateWirelessRatePlanUpdateWirelessRatePlanRequest{
            FriendlyName: sdk.String("alias"),
            UniqueName: sdk.String("officia"),
        },
        Sid: "tempora",
    }, operations.UpdateWirelessRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessRatePlan != nil {
        // handle response
    }
}
```

## UpdateWirelessSim

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateWirelessSim(ctx, operations.UpdateWirelessSimRequest{
        RequestBody: &operations.UpdateWirelessSimUpdateWirelessSimRequest{
            CallbackMethod: sdk.String("ipsam"),
            CallbackURL: sdk.String("http://concrete-hill.net"),
            CommandsCallbackMethod: operations.UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumGet.ToPointer(),
            CommandsCallbackURL: sdk.String("http://ideal-licensing.com"),
            FriendlyName: sdk.String("dolor"),
            RatePlan: sdk.String("maiores"),
            SmsFallbackMethod: operations.UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumHead.ToPointer(),
            SmsFallbackURL: sdk.String("http://torn-mixer.org"),
            SmsMethod: operations.UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumPost.ToPointer(),
            SmsURL: sdk.String("https://spirited-ticket.info"),
            Status: sdk.String("impedit"),
            UniqueName: sdk.String("corporis"),
            VoiceFallbackMethod: operations.UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumGet.ToPointer(),
            VoiceFallbackURL: sdk.String("http://bogus-elite.info"),
            VoiceMethod: operations.UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumPut.ToPointer(),
            VoiceURL: sdk.String("http://venerated-carp.biz"),
        },
        Sid: "eaque",
    }, operations.UpdateWirelessSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewWirelessSim != nil {
        // handle response
    }
}
```
