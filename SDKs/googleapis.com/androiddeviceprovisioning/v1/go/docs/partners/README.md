# Partners

### Available Operations

* [AndroiddeviceprovisioningPartnersCustomersCreate](#androiddeviceprovisioningpartnerscustomerscreate) - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* [AndroiddeviceprovisioningPartnersCustomersList](#androiddeviceprovisioningpartnerscustomerslist) - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* [AndroiddeviceprovisioningPartnersDevicesClaim](#androiddeviceprovisioningpartnersdevicesclaim) - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* [AndroiddeviceprovisioningPartnersDevicesClaimAsync](#androiddeviceprovisioningpartnersdevicesclaimasync) - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [AndroiddeviceprovisioningPartnersDevicesFindByIdentifier](#androiddeviceprovisioningpartnersdevicesfindbyidentifier) - Finds devices by hardware identifiers, such as IMEI.
* [AndroiddeviceprovisioningPartnersDevicesFindByOwner](#androiddeviceprovisioningpartnersdevicesfindbyowner) - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* [AndroiddeviceprovisioningPartnersDevicesGet](#androiddeviceprovisioningpartnersdevicesget) - Gets a device.
* [AndroiddeviceprovisioningPartnersDevicesMetadata](#androiddeviceprovisioningpartnersdevicesmetadata) - Updates reseller metadata associated with the device. Android devices only.
* [AndroiddeviceprovisioningPartnersDevicesUnclaim](#androiddeviceprovisioningpartnersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment.
* [AndroiddeviceprovisioningPartnersDevicesUnclaimAsync](#androiddeviceprovisioningpartnersdevicesunclaimasync) - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync](#androiddeviceprovisioningpartnersdevicesupdatemetadataasync) - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* [AndroiddeviceprovisioningPartnersVendorsCustomersList](#androiddeviceprovisioningpartnersvendorscustomerslist) - Lists the customers of the vendor.
* [AndroiddeviceprovisioningPartnersVendorsList](#androiddeviceprovisioningpartnersvendorslist) - Lists the vendors of the partner.

## AndroiddeviceprovisioningPartnersCustomersCreate

Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersCustomersCreate(ctx, operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateCustomerRequestInput: &shared.CreateCustomerRequestInput{
            Customer: &shared.CompanyInput{
                AdminEmails: []string{
                    "consequatur",
                    "est",
                },
                CompanyName: sdk.String("quibusdam"),
                GoogleWorkspaceAccount: &shared.GoogleWorkspaceAccountInput{
                    CustomerID: sdk.String("explicabo"),
                },
                LanguageCode: sdk.String("deserunt"),
                OwnerEmails: []string{
                    "quibusdam",
                    "labore",
                    "modi",
                },
                SkipWelcomeEmail: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Company != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersCustomersList

Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersCustomersList(ctx, operations.AndroiddeviceprovisioningPartnersCustomersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(433288),
        PageToken: sdk.String("non"),
        PartnerID: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomersResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesClaim

Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesClaim(ctx, operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClaimDeviceRequest: &shared.ClaimDeviceRequest{
            CustomerID: sdk.String("sint"),
            DeviceIdentifier: &shared.DeviceIdentifier{
                ChromeOsAttestedDeviceID: sdk.String("officia"),
                DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                Imei: sdk.String("debitis"),
                Manufacturer: sdk.String("a"),
                Meid: sdk.String("dolorum"),
                Model: sdk.String("in"),
                SerialNumber: sdk.String("in"),
            },
            DeviceMetadata: &shared.DeviceMetadata{
                Entries: map[string]string{
                    "maiores": "rerum",
                    "dicta": "magnam",
                    "cumque": "facere",
                    "ea": "aliquid",
                },
            },
            GoogleWorkspaceCustomerID: sdk.String("laborum"),
            PreProvisioningToken: sdk.String("accusamus"),
            SectionType: shared.ClaimDeviceRequestSectionTypeEnumSectionTypeUnspecified.ToPointer(),
            SimlockProfileID: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("nam"),
        PartnerID: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimDeviceResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesClaimAsync

Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesClaimAsync(ctx, operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClaimDevicesRequest: &shared.ClaimDevicesRequest{
            Claims: []shared.PartnerClaim{
                shared.PartnerClaim{
                    CustomerID: sdk.String("nisi"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("vel"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("omnis"),
                        Manufacturer: sdk.String("molestiae"),
                        Meid: sdk.String("perferendis"),
                        Model: sdk.String("nihil"),
                        SerialNumber: sdk.String("magnam"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "id": "labore",
                            "labore": "suscipit",
                            "natus": "nobis",
                        },
                    },
                    GoogleWorkspaceCustomerID: sdk.String("eum"),
                    PreProvisioningToken: sdk.String("vero"),
                    SectionType: shared.PartnerClaimSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                    SimlockProfileID: sdk.String("architecto"),
                },
                shared.PartnerClaim{
                    CustomerID: sdk.String("magnam"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("et"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("ullam"),
                        Manufacturer: sdk.String("provident"),
                        Meid: sdk.String("quos"),
                        Model: sdk.String("sint"),
                        SerialNumber: sdk.String("accusantium"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "reiciendis": "mollitia",
                            "ad": "eum",
                            "dolor": "necessitatibus",
                        },
                    },
                    GoogleWorkspaceCustomerID: sdk.String("odit"),
                    PreProvisioningToken: sdk.String("nemo"),
                    SectionType: shared.PartnerClaimSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                    SimlockProfileID: sdk.String("iure"),
                },
                shared.PartnerClaim{
                    CustomerID: sdk.String("doloribus"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("debitis"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                        Imei: sdk.String("maxime"),
                        Manufacturer: sdk.String("deleniti"),
                        Meid: sdk.String("facilis"),
                        Model: sdk.String("in"),
                        SerialNumber: sdk.String("architecto"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "repudiandae": "ullam",
                        },
                    },
                    GoogleWorkspaceCustomerID: sdk.String("expedita"),
                    PreProvisioningToken: sdk.String("nihil"),
                    SectionType: shared.PartnerClaimSectionTypeEnumSectionTypeZeroTouch.ToPointer(),
                    SimlockProfileID: sdk.String("quibusdam"),
                },
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        PartnerID: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesFindByIdentifier

Finds devices by hardware identifiers, such as IMEI.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesFindByIdentifier(ctx, operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FindDevicesByDeviceIdentifierRequest: &shared.FindDevicesByDeviceIdentifierRequest{
            DeviceIdentifier: &shared.DeviceIdentifier{
                ChromeOsAttestedDeviceID: sdk.String("pariatur"),
                DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeChromeOs.ToPointer(),
                Imei: sdk.String("ea"),
                Manufacturer: sdk.String("excepturi"),
                Meid: sdk.String("odit"),
                Model: sdk.String("ea"),
                SerialNumber: sdk.String("accusantium"),
            },
            Limit: sdk.String("ab"),
            PageToken: sdk.String("maiores"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        PartnerID: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindDevicesByDeviceIdentifierResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesFindByOwner

Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesFindByOwner(ctx, operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FindDevicesByOwnerRequest: &shared.FindDevicesByOwnerRequest{
            CustomerID: []string{
                "aut",
            },
            GoogleWorkspaceCustomerID: []string{
                "corporis",
                "hic",
                "libero",
                "nobis",
            },
            Limit: sdk.String("dolores"),
            PageToken: sdk.String("quis"),
            SectionType: shared.FindDevicesByOwnerRequestSectionTypeEnumSectionTypeSimLock.ToPointer(),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("perferendis"),
        PartnerID: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindDevicesByOwnerResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesGet

Gets a device.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesGet(ctx, operations.AndroiddeviceprovisioningPartnersDevicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        Name: "George Sawayn",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesMetadata

Updates reseller metadata associated with the device. Android devices only.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesMetadata(ctx, operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateDeviceMetadataRequest: &shared.UpdateDeviceMetadataRequest{
            DeviceMetadata: &shared.DeviceMetadata{
                Entries: map[string]string{
                    "earum": "modi",
                    "iste": "dolorum",
                    "deleniti": "pariatur",
                    "provident": "nobis",
                },
            },
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        DeviceID: "quos",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("dolorem"),
        MetadataOwnerID: "dolorem",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceMetadata != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesUnclaim(ctx, operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UnclaimDeviceRequest: &shared.UnclaimDeviceRequest{
            DeviceID: sdk.String("cum"),
            DeviceIdentifier: &shared.DeviceIdentifier{
                ChromeOsAttestedDeviceID: sdk.String("voluptate"),
                DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                Imei: sdk.String("reiciendis"),
                Manufacturer: sdk.String("amet"),
                Meid: sdk.String("dolorum"),
                Model: sdk.String("numquam"),
                SerialNumber: sdk.String("veritatis"),
            },
            SectionType: shared.UnclaimDeviceRequestSectionTypeEnumSectionTypeUnspecified.ToPointer(),
            VacationModeDays: sdk.Int(56418),
            VacationModeExpireTime: sdk.String("iure"),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("voluptas"),
        PartnerID: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesUnclaimAsync

Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesUnclaimAsync(ctx, operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UnclaimDevicesRequest: &shared.UnclaimDevicesRequest{
            Unclaims: []shared.PartnerUnclaim{
                shared.PartnerUnclaim{
                    DeviceID: sdk.String("soluta"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("dolorum"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("voluptate"),
                        Manufacturer: sdk.String("dolorum"),
                        Meid: sdk.String("deleniti"),
                        Model: sdk.String("omnis"),
                        SerialNumber: sdk.String("necessitatibus"),
                    },
                    SectionType: shared.PartnerUnclaimSectionTypeEnumSectionTypeZeroTouch.ToPointer(),
                    VacationModeDays: sdk.Int(990339),
                    VacationModeExpireTime: sdk.String("nihil"),
                },
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("aspernatur"),
        PartnerID: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync

Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync(ctx, operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateDeviceMetadataInBatchRequest: &shared.UpdateDeviceMetadataInBatchRequest{
            Updates: []shared.UpdateMetadataArguments{
                shared.UpdateMetadataArguments{
                    DeviceID: sdk.String("suscipit"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("deserunt"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("minima"),
                        Manufacturer: sdk.String("repellendus"),
                        Meid: sdk.String("totam"),
                        Model: sdk.String("similique"),
                        SerialNumber: sdk.String("alias"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "quaerat": "tempora",
                            "vel": "quod",
                            "officiis": "qui",
                            "dolorum": "a",
                        },
                    },
                },
                shared.UpdateMetadataArguments{
                    DeviceID: sdk.String("esse"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("harum"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("ipsum"),
                        Manufacturer: sdk.String("quisquam"),
                        Meid: sdk.String("tenetur"),
                        Model: sdk.String("amet"),
                        SerialNumber: sdk.String("tempore"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "numquam": "enim",
                            "dolorem": "sapiente",
                            "totam": "nihil",
                            "sit": "expedita",
                        },
                    },
                },
                shared.UpdateMetadataArguments{
                    DeviceID: sdk.String("neque"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("sed"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid.ToPointer(),
                        Imei: sdk.String("libero"),
                        Manufacturer: sdk.String("voluptas"),
                        Meid: sdk.String("deserunt"),
                        Model: sdk.String("quam"),
                        SerialNumber: sdk.String("ipsum"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "qui": "cupiditate",
                            "maxime": "pariatur",
                        },
                    },
                },
                shared.UpdateMetadataArguments{
                    DeviceID: sdk.String("soluta"),
                    DeviceIdentifier: &shared.DeviceIdentifier{
                        ChromeOsAttestedDeviceID: sdk.String("dicta"),
                        DeviceType: shared.DeviceIdentifierDeviceTypeEnumDeviceTypeChromeOs.ToPointer(),
                        Imei: sdk.String("totam"),
                        Manufacturer: sdk.String("incidunt"),
                        Meid: sdk.String("aspernatur"),
                        Model: sdk.String("dolores"),
                        SerialNumber: sdk.String("distinctio"),
                    },
                    DeviceMetadata: &shared.DeviceMetadata{
                        Entries: map[string]string{
                            "aliquid": "quam",
                            "molestias": "temporibus",
                            "qui": "neque",
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("nam"),
        PartnerID: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersVendorsCustomersList

Lists the customers of the vendor.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersVendorsCustomersList(ctx, operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(731694),
        PageToken: sdk.String("cupiditate"),
        Parent: "aperiam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVendorCustomersResponse != nil {
        // handle response
    }
}
```

## AndroiddeviceprovisioningPartnersVendorsList

Lists the vendors of the partner.

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
    res, err := s.Partners.AndroiddeviceprovisioningPartnersVendorsList(ctx, operations.AndroiddeviceprovisioningPartnersVendorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("quae"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quas"),
        PageSize: sdk.Int64(929530),
        PageToken: sdk.String("consequatur"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVendorsResponse != nil {
        // handle response
    }
}
```
