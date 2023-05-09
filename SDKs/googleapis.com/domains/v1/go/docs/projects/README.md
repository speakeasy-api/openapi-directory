# Projects

### Available Operations

* [DomainsProjectsLocationsList](#domainsprojectslocationslist) - Lists information about the supported locations for this service.
* [DomainsProjectsLocationsOperationsList](#domainsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DomainsProjectsLocationsRegistrationsConfigureContactSettings](#domainsprojectslocationsregistrationsconfigurecontactsettings) - Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
* [DomainsProjectsLocationsRegistrationsConfigureDNSSettings](#domainsprojectslocationsregistrationsconfigurednssettings) - Updates a `Registration`'s DNS settings.
* [DomainsProjectsLocationsRegistrationsConfigureManagementSettings](#domainsprojectslocationsregistrationsconfiguremanagementsettings) - Updates a `Registration`'s management settings.
* [DomainsProjectsLocationsRegistrationsDelete](#domainsprojectslocationsregistrationsdelete) - Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [DomainsProjectsLocationsRegistrationsExport](#domainsprojectslocationsregistrationsexport) - Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [DomainsProjectsLocationsRegistrationsGet](#domainsprojectslocationsregistrationsget) - Gets the details of a `Registration` resource.
* [DomainsProjectsLocationsRegistrationsGetIamPolicy](#domainsprojectslocationsregistrationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DomainsProjectsLocationsRegistrationsImport](#domainsprojectslocationsregistrationsimport) - Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
* [DomainsProjectsLocationsRegistrationsList](#domainsprojectslocationsregistrationslist) - Lists the `Registration` resources in a project.
* [DomainsProjectsLocationsRegistrationsPatch](#domainsprojectslocationsregistrationspatch) - Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
* [DomainsProjectsLocationsRegistrationsRegister](#domainsprojectslocationsregistrationsregister) - Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
* [DomainsProjectsLocationsRegistrationsResetAuthorizationCode](#domainsprojectslocationsregistrationsresetauthorizationcode) - Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
* [DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCode](#domainsprojectslocationsregistrationsretrieveauthorizationcode) - Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
* [DomainsProjectsLocationsRegistrationsRetrieveImportableDomains](#domainsprojectslocationsregistrationsretrieveimportabledomains) - Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
* [DomainsProjectsLocationsRegistrationsRetrieveRegisterParameters](#domainsprojectslocationsregistrationsretrieveregisterparameters) - Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
* [DomainsProjectsLocationsRegistrationsRetrieveTransferParameters](#domainsprojectslocationsregistrationsretrievetransferparameters) - Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
* [DomainsProjectsLocationsRegistrationsSearchDomains](#domainsprojectslocationsregistrationssearchdomains) - Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
* [DomainsProjectsLocationsRegistrationsSetIamPolicy](#domainsprojectslocationsregistrationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DomainsProjectsLocationsRegistrationsTestIamPermissions](#domainsprojectslocationsregistrationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DomainsProjectsLocationsRegistrationsTransfer](#domainsprojectslocationsregistrationstransfer) - Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

## DomainsProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.DomainsProjectsLocationsList(ctx, operations.DomainsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.DomainsProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.DomainsProjectsLocationsOperationsList(ctx, operations.DomainsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Filter: sdk.String("quod"),
        Key: sdk.String("esse"),
        Name: "Miss Lowell Parisian",
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DomainsProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsConfigureContactSettings

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsConfigureContactSettings(ctx, operations.DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConfigureContactSettingsRequest: &shared.ConfigureContactSettingsRequest{
            ContactNotices: []shared.ConfigureContactSettingsRequestContactNoticesEnum{
                shared.ConfigureContactSettingsRequestContactNoticesEnumContactNoticeUnspecified,
                shared.ConfigureContactSettingsRequestContactNoticesEnumContactNoticeUnspecified,
            },
            ContactSettings: &shared.ContactSettings{
                AdminContact: &shared.Contact{
                    Email: sdk.String("Ona.Rippin@gmail.com"),
                    FaxNumber: sdk.String("excepturi"),
                    PhoneNumber: sdk.String("aspernatur"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "ad",
                        },
                        AdministrativeArea: sdk.String("natus"),
                        LanguageCode: sdk.String("sed"),
                        Locality: sdk.String("iste"),
                        Organization: sdk.String("dolor"),
                        PostalCode: sdk.String("39964-3649"),
                        Recipients: []string{
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                        RegionCode: sdk.String("est"),
                        Revision: sdk.Int(653140),
                        SortingCode: sdk.String("laborum"),
                        Sublocality: sdk.String("dolores"),
                    },
                },
                Privacy: shared.ContactSettingsPrivacyEnumContactPrivacyUnspecified.ToPointer(),
                RegistrantContact: &shared.Contact{
                    Email: sdk.String("Braulio60@yahoo.com"),
                    FaxNumber: sdk.String("nemo"),
                    PhoneNumber: sdk.String("minima"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "accusantium",
                            "iure",
                            "culpa",
                        },
                        AdministrativeArea: sdk.String("doloribus"),
                        LanguageCode: sdk.String("sapiente"),
                        Locality: sdk.String("architecto"),
                        Organization: sdk.String("mollitia"),
                        PostalCode: sdk.String("61965"),
                        Recipients: []string{
                            "commodi",
                            "quam",
                        },
                        RegionCode: sdk.String("molestiae"),
                        Revision: sdk.Int(244425),
                        SortingCode: sdk.String("error"),
                        Sublocality: sdk.String("quia"),
                    },
                },
                TechnicalContact: &shared.Contact{
                    Email: sdk.String("Bernie.Padberg@yahoo.com"),
                    FaxNumber: sdk.String("odit"),
                    PhoneNumber: sdk.String("quo"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "tenetur",
                        },
                        AdministrativeArea: sdk.String("ipsam"),
                        LanguageCode: sdk.String("id"),
                        Locality: sdk.String("possimus"),
                        Organization: sdk.String("aut"),
                        PostalCode: sdk.String("68609"),
                        Recipients: []string{
                            "vero",
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                        },
                        RegionCode: sdk.String("ipsa"),
                        Revision: sdk.Int(604846),
                        SortingCode: sdk.String("voluptate"),
                        Sublocality: sdk.String("cum"),
                    },
                },
            },
            UpdateMask: sdk.String("perferendis"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        Registration: "iusto",
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity{
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

## DomainsProjectsLocationsRegistrationsConfigureDNSSettings

Updates a `Registration`'s DNS settings.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsConfigureDNSSettings(ctx, operations.DomainsProjectsLocationsRegistrationsConfigureDNSSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConfigureDNSSettingsRequestInput: &shared.ConfigureDNSSettingsRequestInput{
            DNSSettings: &shared.DNSSettingsInput{
                CustomDNS: &shared.CustomDNS{
                    DsRecords: []shared.DsRecord{
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumRsasha1Nsec3Sha1.ToPointer(),
                            Digest: sdk.String("repudiandae"),
                            DigestType: shared.DsRecordDigestTypeEnumDigestTypeUnspecified.ToPointer(),
                            KeyTag: sdk.Int(216822),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumEcdsap384Sha384.ToPointer(),
                            Digest: sdk.String("molestias"),
                            DigestType: shared.DsRecordDigestTypeEnumSha256.ToPointer(),
                            KeyTag: sdk.Int(865103),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumEcc.ToPointer(),
                            Digest: sdk.String("praesentium"),
                            DigestType: shared.DsRecordDigestTypeEnumSha256.ToPointer(),
                            KeyTag: sdk.Int(916723),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumRsamd5.ToPointer(),
                            Digest: sdk.String("repudiandae"),
                            DigestType: shared.DsRecordDigestTypeEnumSha256.ToPointer(),
                            KeyTag: sdk.Int(83112),
                        },
                    },
                    NameServers: []string{
                        "incidunt",
                        "enim",
                        "consequatur",
                        "est",
                    },
                },
                GlueRecords: []shared.GlueRecord{
                    shared.GlueRecord{
                        HostName: sdk.String("compassionate-penguin.net"),
                        Ipv4Addresses: []string{
                            "labore",
                            "modi",
                            "qui",
                            "aliquid",
                        },
                        Ipv6Addresses: []string{
                            "quos",
                            "perferendis",
                            "magni",
                        },
                    },
                    shared.GlueRecord{
                        HostName: sdk.String("svelte-frosting.com"),
                        Ipv4Addresses: []string{
                            "dolorum",
                        },
                        Ipv6Addresses: []string{
                            "tempora",
                            "facilis",
                            "tempore",
                        },
                    },
                    shared.GlueRecord{
                        HostName: sdk.String("flashy-void.info"),
                        Ipv4Addresses: []string{
                            "eligendi",
                        },
                        Ipv6Addresses: []string{
                            "aliquid",
                            "provident",
                            "necessitatibus",
                        },
                    },
                    shared.GlueRecord{
                        HostName: sdk.String("nonstop-pate.biz"),
                        Ipv4Addresses: []string{
                            "a",
                            "dolorum",
                            "in",
                            "in",
                        },
                        Ipv6Addresses: []string{
                            "maiores",
                            "rerum",
                            "dicta",
                            "magnam",
                        },
                    },
                },
                GoogleDomainsDNS: &shared.GoogleDomainsDNSInput{
                    DsState: shared.GoogleDomainsDNSDsStateEnumDsRecordsPublished.ToPointer(),
                },
            },
            UpdateMask: sdk.String("facere"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        Registration: "accusamus",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.DomainsProjectsLocationsRegistrationsConfigureDNSSettingsSecurity{
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

## DomainsProjectsLocationsRegistrationsConfigureManagementSettings

Updates a `Registration`'s management settings.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsConfigureManagementSettings(ctx, operations.DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConfigureManagementSettingsRequestInput: &shared.ConfigureManagementSettingsRequestInput{
            ManagementSettings: &shared.ManagementSettingsInput{
                TransferLockState: shared.ManagementSettingsTransferLockStateEnumLocked.ToPointer(),
            },
            UpdateMask: sdk.String("id"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        Registration: "natus",
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity{
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

## DomainsProjectsLocationsRegistrationsDelete

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsDelete(ctx, operations.DomainsProjectsLocationsRegistrationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        Name: "Laurie Mosciski",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DomainsProjectsLocationsRegistrationsDeleteSecurity{
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

## DomainsProjectsLocationsRegistrationsExport

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsExport(ctx, operations.DomainsProjectsLocationsRegistrationsExportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ullam": "provident",
            "quos": "sint",
            "accusantium": "mollitia",
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        Name: "Ms. Fred Hilll",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DomainsProjectsLocationsRegistrationsExportSecurity{
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

## DomainsProjectsLocationsRegistrationsGet

Gets the details of a `Registration` resource.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsGet(ctx, operations.DomainsProjectsLocationsRegistrationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("ullam"),
        Name: "Jessie Zulauf",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DomainsProjectsLocationsRegistrationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Registration != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsGetIamPolicy(ctx, operations.DomainsProjectsLocationsRegistrationsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        OptionsRequestedPolicyVersion: sdk.Int64(807319),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        Resource: "excepturi",
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.DomainsProjectsLocationsRegistrationsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsImport

Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsImport(ctx, operations.DomainsProjectsLocationsRegistrationsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportDomainRequest: &shared.ImportDomainRequest{
            DomainName: sdk.String("ab"),
            Labels: map[string]string{
                "quidem": "ipsam",
                "voluptate": "autem",
                "nam": "eaque",
                "pariatur": "nemo",
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("amet"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("cumque"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DomainsProjectsLocationsRegistrationsImportSecurity{
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

## DomainsProjectsLocationsRegistrationsList

Lists the `Registration` resources in a project.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsList(ctx, operations.DomainsProjectsLocationsRegistrationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Filter: sdk.String("quis"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(18521),
        PageToken: sdk.String("dolores"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DomainsProjectsLocationsRegistrationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRegistrationsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsPatch

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsPatch(ctx, operations.DomainsProjectsLocationsRegistrationsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RegistrationInput: &shared.RegistrationInput{
            ContactSettings: &shared.ContactSettings{
                AdminContact: &shared.Contact{
                    Email: sdk.String("Timothy_Mohr3@hotmail.com"),
                    FaxNumber: sdk.String("porro"),
                    PhoneNumber: sdk.String("consequuntur"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "error",
                            "eaque",
                            "occaecati",
                        },
                        AdministrativeArea: sdk.String("rerum"),
                        LanguageCode: sdk.String("adipisci"),
                        Locality: sdk.String("asperiores"),
                        Organization: sdk.String("earum"),
                        PostalCode: sdk.String("66585"),
                        Recipients: []string{
                            "libero",
                            "delectus",
                            "quaerat",
                            "quos",
                        },
                        RegionCode: sdk.String("aliquid"),
                        Revision: sdk.Int(212390),
                        SortingCode: sdk.String("dolorem"),
                        Sublocality: sdk.String("dolor"),
                    },
                },
                Privacy: shared.ContactSettingsPrivacyEnumContactPrivacyUnspecified.ToPointer(),
                RegistrantContact: &shared.Contact{
                    Email: sdk.String("Tyreek.Marks49@gmail.com"),
                    FaxNumber: sdk.String("reiciendis"),
                    PhoneNumber: sdk.String("amet"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "numquam",
                            "veritatis",
                            "ipsa",
                        },
                        AdministrativeArea: sdk.String("ipsa"),
                        LanguageCode: sdk.String("iure"),
                        Locality: sdk.String("odio"),
                        Organization: sdk.String("quaerat"),
                        PostalCode: sdk.String("69361-5080"),
                        Recipients: []string{
                            "dolorum",
                            "iusto",
                            "voluptate",
                        },
                        RegionCode: sdk.String("dolorum"),
                        Revision: sdk.Int(536579),
                        SortingCode: sdk.String("omnis"),
                        Sublocality: sdk.String("necessitatibus"),
                    },
                },
                TechnicalContact: &shared.Contact{
                    Email: sdk.String("Yessenia45@hotmail.com"),
                    FaxNumber: sdk.String("id"),
                    PhoneNumber: sdk.String("saepe"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "aspernatur",
                            "perferendis",
                        },
                        AdministrativeArea: sdk.String("amet"),
                        LanguageCode: sdk.String("optio"),
                        Locality: sdk.String("accusamus"),
                        Organization: sdk.String("ad"),
                        PostalCode: sdk.String("36538-5608"),
                        Recipients: []string{
                            "tempora",
                            "vel",
                        },
                        RegionCode: sdk.String("quod"),
                        Revision: sdk.Int(885338),
                        SortingCode: sdk.String("qui"),
                        Sublocality: sdk.String("dolorum"),
                    },
                },
            },
            DNSSettings: &shared.DNSSettingsInput{
                CustomDNS: &shared.CustomDNS{
                    DsRecords: []shared.DsRecord{
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumRsasha256.ToPointer(),
                            Digest: sdk.String("harum"),
                            DigestType: shared.DsRecordDigestTypeEnumSha256.ToPointer(),
                            KeyTag: sdk.Int(215507),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumEd448.ToPointer(),
                            Digest: sdk.String("tenetur"),
                            DigestType: shared.DsRecordDigestTypeEnumSha1.ToPointer(),
                            KeyTag: sdk.Int(730856),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumIndirect.ToPointer(),
                            Digest: sdk.String("numquam"),
                            DigestType: shared.DsRecordDigestTypeEnumSha1.ToPointer(),
                            KeyTag: sdk.Int(213312),
                        },
                        shared.DsRecord{
                            Algorithm: shared.DsRecordAlgorithmEnumPrivateoid.ToPointer(),
                            Digest: sdk.String("totam"),
                            DigestType: shared.DsRecordDigestTypeEnumSha256.ToPointer(),
                            KeyTag: sdk.Int(25662),
                        },
                    },
                    NameServers: []string{
                        "neque",
                        "sed",
                        "vel",
                    },
                },
                GlueRecords: []shared.GlueRecord{
                    shared.GlueRecord{
                        HostName: sdk.String("hasty-pen.info"),
                        Ipv4Addresses: []string{
                            "incidunt",
                        },
                        Ipv6Addresses: []string{
                            "cupiditate",
                        },
                    },
                    shared.GlueRecord{
                        HostName: sdk.String("steel-subconscious.net"),
                        Ipv4Addresses: []string{
                            "laborum",
                        },
                        Ipv6Addresses: []string{
                            "incidunt",
                            "aspernatur",
                            "dolores",
                        },
                    },
                    shared.GlueRecord{
                        HostName: sdk.String("sandy-psychoanalyst.info"),
                        Ipv4Addresses: []string{
                            "molestias",
                            "temporibus",
                        },
                        Ipv6Addresses: []string{
                            "neque",
                        },
                    },
                },
                GoogleDomainsDNS: &shared.GoogleDomainsDNSInput{
                    DsState: shared.GoogleDomainsDNSDsStateEnumDsStateUnspecified.ToPointer(),
                },
            },
            DomainName: sdk.String("magni"),
            Labels: map[string]string{
                "sunt": "ullam",
                "nam": "hic",
            },
            ManagementSettings: &shared.ManagementSettingsInput{
                TransferLockState: shared.ManagementSettingsTransferLockStateEnumTransferLockStateUnspecified.ToPointer(),
            },
            PendingContactSettings: &shared.ContactSettings{
                AdminContact: &shared.Contact{
                    Email: sdk.String("Ned90@hotmail.com"),
                    FaxNumber: sdk.String("ipsum"),
                    PhoneNumber: sdk.String("veritatis"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "quos",
                            "tempore",
                            "cupiditate",
                        },
                        AdministrativeArea: sdk.String("aperiam"),
                        LanguageCode: sdk.String("delectus"),
                        Locality: sdk.String("dolorem"),
                        Organization: sdk.String("dolore"),
                        PostalCode: sdk.String("26100"),
                        Recipients: []string{
                            "itaque",
                            "consequatur",
                            "est",
                        },
                        RegionCode: sdk.String("repellendus"),
                        Revision: sdk.Int(785153),
                        SortingCode: sdk.String("doloribus"),
                        Sublocality: sdk.String("ut"),
                    },
                },
                Privacy: shared.ContactSettingsPrivacyEnumPrivateContactData.ToPointer(),
                RegistrantContact: &shared.Contact{
                    Email: sdk.String("Cheyanne.Bergnaum@yahoo.com"),
                    FaxNumber: sdk.String("occaecati"),
                    PhoneNumber: sdk.String("voluptatibus"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "vero",
                            "omnis",
                            "quis",
                            "ipsum",
                        },
                        AdministrativeArea: sdk.String("delectus"),
                        LanguageCode: sdk.String("voluptate"),
                        Locality: sdk.String("consectetur"),
                        Organization: sdk.String("vero"),
                        PostalCode: sdk.String("49774-6784"),
                        Recipients: []string{
                            "quibusdam",
                            "illum",
                        },
                        RegionCode: sdk.String("sequi"),
                        Revision: sdk.Int(617877),
                        SortingCode: sdk.String("impedit"),
                        Sublocality: sdk.String("aut"),
                    },
                },
                TechnicalContact: &shared.Contact{
                    Email: sdk.String("Fae78@hotmail.com"),
                    FaxNumber: sdk.String("maiores"),
                    PhoneNumber: sdk.String("doloribus"),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "eligendi",
                            "ducimus",
                        },
                        AdministrativeArea: sdk.String("alias"),
                        LanguageCode: sdk.String("officia"),
                        Locality: sdk.String("tempora"),
                        Organization: sdk.String("ipsam"),
                        PostalCode: sdk.String("14821"),
                        Recipients: []string{
                            "laudantium",
                            "dicta",
                        },
                        RegionCode: sdk.String("dolor"),
                        Revision: sdk.Int(980700),
                        SortingCode: sdk.String("quasi"),
                        Sublocality: sdk.String("ex"),
                    },
                },
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("sapiente"),
        Name: "Elbert Jenkins",
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UpdateMask: sdk.String("inventore"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("ea"),
    }, operations.DomainsProjectsLocationsRegistrationsPatchSecurity{
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

## DomainsProjectsLocationsRegistrationsRegister

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsRegister(ctx, operations.DomainsProjectsLocationsRegistrationsRegisterRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RegisterDomainRequestInput: &shared.RegisterDomainRequestInput{
            ContactNotices: []shared.RegisterDomainRequestContactNoticesEnum{
                shared.RegisterDomainRequestContactNoticesEnumPublicContactDataAcknowledgement,
            },
            DomainNotices: []shared.RegisterDomainRequestDomainNoticesEnum{
                shared.RegisterDomainRequestDomainNoticesEnumDomainNoticeUnspecified,
            },
            Registration: &shared.RegistrationInput{
                ContactSettings: &shared.ContactSettings{
                    AdminContact: &shared.Contact{
                        Email: sdk.String("Veda1@gmail.com"),
                        FaxNumber: sdk.String("deleniti"),
                        PhoneNumber: sdk.String("impedit"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "fugit",
                                "accusamus",
                            },
                            AdministrativeArea: sdk.String("inventore"),
                            LanguageCode: sdk.String("non"),
                            Locality: sdk.String("et"),
                            Organization: sdk.String("dolorum"),
                            PostalCode: sdk.String("82447-5883"),
                            Recipients: []string{
                                "quasi",
                                "tempora",
                                "numquam",
                            },
                            RegionCode: sdk.String("explicabo"),
                            Revision: sdk.Int(591935),
                            SortingCode: sdk.String("ipsa"),
                            Sublocality: sdk.String("molestiae"),
                        },
                    },
                    Privacy: shared.ContactSettingsPrivacyEnumPublicContactData.ToPointer(),
                    RegistrantContact: &shared.Contact{
                        Email: sdk.String("Devyn_Koch@yahoo.com"),
                        FaxNumber: sdk.String("fuga"),
                        PhoneNumber: sdk.String("reprehenderit"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "fugiat",
                                "ut",
                                "eum",
                            },
                            AdministrativeArea: sdk.String("suscipit"),
                            LanguageCode: sdk.String("assumenda"),
                            Locality: sdk.String("eos"),
                            Organization: sdk.String("praesentium"),
                            PostalCode: sdk.String("00662-7876"),
                            Recipients: []string{
                                "eos",
                                "voluptas",
                            },
                            RegionCode: sdk.String("ab"),
                            Revision: sdk.Int(587600),
                            SortingCode: sdk.String("consequatur"),
                            Sublocality: sdk.String("tempora"),
                        },
                    },
                    TechnicalContact: &shared.Contact{
                        Email: sdk.String("Gabe77@hotmail.com"),
                        FaxNumber: sdk.String("esse"),
                        PhoneNumber: sdk.String("recusandae"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "distinctio",
                            },
                            AdministrativeArea: sdk.String("quod"),
                            LanguageCode: sdk.String("dignissimos"),
                            Locality: sdk.String("inventore"),
                            Organization: sdk.String("nihil"),
                            PostalCode: sdk.String("83454-9164"),
                            Recipients: []string{
                                "porro",
                            },
                            RegionCode: sdk.String("eum"),
                            Revision: sdk.Int(556429),
                            SortingCode: sdk.String("praesentium"),
                            Sublocality: sdk.String("consequuntur"),
                        },
                    },
                },
                DNSSettings: &shared.DNSSettingsInput{
                    CustomDNS: &shared.CustomDNS{
                        DsRecords: []shared.DsRecord{
                            shared.DsRecord{
                                Algorithm: shared.DsRecordAlgorithmEnumDh.ToPointer(),
                                Digest: sdk.String("fuga"),
                                DigestType: shared.DsRecordDigestTypeEnumGost3411.ToPointer(),
                                KeyTag: sdk.Int(277596),
                            },
                            shared.DsRecord{
                                Algorithm: shared.DsRecordAlgorithmEnumRsasha512.ToPointer(),
                                Digest: sdk.String("explicabo"),
                                DigestType: shared.DsRecordDigestTypeEnumSha1.ToPointer(),
                                KeyTag: sdk.Int(392676),
                            },
                            shared.DsRecord{
                                Algorithm: shared.DsRecordAlgorithmEnumDh.ToPointer(),
                                Digest: sdk.String("sapiente"),
                                DigestType: shared.DsRecordDigestTypeEnumDigestTypeUnspecified.ToPointer(),
                                KeyTag: sdk.Int(187131),
                            },
                        },
                        NameServers: []string{
                            "saepe",
                        },
                    },
                    GlueRecords: []shared.GlueRecord{
                        shared.GlueRecord{
                            HostName: sdk.String("monumental-bolero.info"),
                            Ipv4Addresses: []string{
                                "accusamus",
                                "veritatis",
                                "esse",
                                "quod",
                            },
                            Ipv6Addresses: []string{
                                "vero",
                                "aliquid",
                                "quasi",
                            },
                        },
                        shared.GlueRecord{
                            HostName: sdk.String("untidy-heterosexual.net"),
                            Ipv4Addresses: []string{
                                "rerum",
                                "occaecati",
                            },
                            Ipv6Addresses: []string{
                                "distinctio",
                                "eligendi",
                            },
                        },
                        shared.GlueRecord{
                            HostName: sdk.String("all-partridge.net"),
                            Ipv4Addresses: []string{
                                "cumque",
                            },
                            Ipv6Addresses: []string{
                                "consequatur",
                            },
                        },
                    },
                    GoogleDomainsDNS: &shared.GoogleDomainsDNSInput{
                        DsState: shared.GoogleDomainsDNSDsStateEnumDsRecordsPublished.ToPointer(),
                    },
                },
                DomainName: sdk.String("quaerat"),
                Labels: map[string]string{
                    "consectetur": "esse",
                    "blanditiis": "provident",
                    "a": "nulla",
                    "quas": "esse",
                },
                ManagementSettings: &shared.ManagementSettingsInput{
                    TransferLockState: shared.ManagementSettingsTransferLockStateEnumTransferLockStateUnspecified.ToPointer(),
                },
                PendingContactSettings: &shared.ContactSettings{
                    AdminContact: &shared.Contact{
                        Email: sdk.String("Lilly_Mayer15@hotmail.com"),
                        FaxNumber: sdk.String("eveniet"),
                        PhoneNumber: sdk.String("asperiores"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "veritatis",
                                "consequuntur",
                                "quasi",
                                "similique",
                            },
                            AdministrativeArea: sdk.String("culpa"),
                            LanguageCode: sdk.String("aliquid"),
                            Locality: sdk.String("tenetur"),
                            Organization: sdk.String("quae"),
                            PostalCode: sdk.String("44278-7039"),
                            Recipients: []string{
                                "ullam",
                            },
                            RegionCode: sdk.String("reprehenderit"),
                            Revision: sdk.Int(356707),
                            SortingCode: sdk.String("nisi"),
                            Sublocality: sdk.String("aut"),
                        },
                    },
                    Privacy: shared.ContactSettingsPrivacyEnumPrivateContactData.ToPointer(),
                    RegistrantContact: &shared.Contact{
                        Email: sdk.String("Rosanna_Jacobs@gmail.com"),
                        FaxNumber: sdk.String("dolorum"),
                        PhoneNumber: sdk.String("architecto"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "tenetur",
                                "quasi",
                                "at",
                            },
                            AdministrativeArea: sdk.String("et"),
                            LanguageCode: sdk.String("voluptate"),
                            Locality: sdk.String("ipsa"),
                            Organization: sdk.String("minima"),
                            PostalCode: sdk.String("22680"),
                            Recipients: []string{
                                "aut",
                                "laudantium",
                                "eum",
                            },
                            RegionCode: sdk.String("mollitia"),
                            Revision: sdk.Int(68074),
                            SortingCode: sdk.String("corrupti"),
                            Sublocality: sdk.String("non"),
                        },
                    },
                    TechnicalContact: &shared.Contact{
                        Email: sdk.String("Dallas77@gmail.com"),
                        FaxNumber: sdk.String("explicabo"),
                        PhoneNumber: sdk.String("voluptas"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "dignissimos",
                            },
                            AdministrativeArea: sdk.String("dicta"),
                            LanguageCode: sdk.String("maiores"),
                            Locality: sdk.String("natus"),
                            Organization: sdk.String("velit"),
                            PostalCode: sdk.String("39043-1868"),
                            Recipients: []string{
                                "officia",
                                "asperiores",
                            },
                            RegionCode: sdk.String("nemo"),
                            Revision: sdk.Int(65304),
                            SortingCode: sdk.String("quaerat"),
                            Sublocality: sdk.String("porro"),
                        },
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
            YearlyPrice: &shared.Money{
                CurrencyCode: sdk.String("quod"),
                Nanos: sdk.Int(288398),
                Units: sdk.String("ab"),
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("culpa"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DomainsProjectsLocationsRegistrationsRegisterSecurity{
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

## DomainsProjectsLocationsRegistrationsResetAuthorizationCode

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsResetAuthorizationCode(ctx, operations.DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quos": "vel",
            "labore": "possimus",
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        Registration: "nemo",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizationCode != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCode

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCode(ctx, operations.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        Registration: "doloribus",
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizationCode != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsRetrieveImportableDomains

Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsRetrieveImportableDomains(ctx, operations.DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("asperiores"),
        Location: "adipisci",
        OauthToken: sdk.String("non"),
        PageSize: sdk.Int64(228263),
        PageToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveImportableDomainsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsRetrieveRegisterParameters

Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsRetrieveRegisterParameters(ctx, operations.DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        DomainName: sdk.String("ipsa"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("libero"),
        Location: "vitae",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveRegisterParametersResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsRetrieveTransferParameters

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsRetrieveTransferParameters(ctx, operations.DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        DomainName: sdk.String("nobis"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("adipisci"),
        Location: "minus",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveTransferParametersResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsSearchDomains

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsSearchDomains(ctx, operations.DomainsProjectsLocationsRegistrationsSearchDomainsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("cum"),
        Location: "blanditiis",
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("hic"),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.DomainsProjectsLocationsRegistrationsSearchDomainsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchDomainsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsSetIamPolicy(ctx, operations.DomainsProjectsLocationsRegistrationsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nobis",
                                    "sit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "reiciendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "facilis",
                                    "voluptate",
                                    "expedita",
                                    "ab",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "laborum",
                                    "sed",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("commodi"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptas",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "suscipit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "illo",
                                    "reiciendis",
                                    "perferendis",
                                    "corrupti",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("incidunt"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eius",
                                    "necessitatibus",
                                    "ipsum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("occaecati"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("voluptatibus"),
                            Expression: sdk.String("tempora"),
                            Location: sdk.String("tempora"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "ex",
                            "sit",
                            "non",
                            "officiis",
                        },
                        Role: sdk.String("praesentium"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("facilis"),
                            Expression: sdk.String("quaerat"),
                            Location: sdk.String("incidunt"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "rem",
                            "sit",
                            "nobis",
                            "error",
                        },
                        Role: sdk.String("veniam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("minima"),
                            Expression: sdk.String("recusandae"),
                            Location: sdk.String("reiciendis"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "aperiam",
                        },
                        Role: sdk.String("saepe"),
                    },
                },
                Etag: sdk.String("numquam"),
                Version: sdk.Int(329935),
            },
            UpdateMask: sdk.String("in"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        Resource: "dolorum",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("error"),
    }, operations.DomainsProjectsLocationsRegistrationsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsTestIamPermissions(ctx, operations.DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "debitis",
                "neque",
                "dolorum",
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        Resource: "fugit",
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DomainsProjectsLocationsRegistrationsTransfer

Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

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
    res, err := s.Projects.DomainsProjectsLocationsRegistrationsTransfer(ctx, operations.DomainsProjectsLocationsRegistrationsTransferRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TransferDomainRequestInput: &shared.TransferDomainRequestInput{
            AuthorizationCode: &shared.AuthorizationCode{
                Code: sdk.String("culpa"),
            },
            ContactNotices: []shared.TransferDomainRequestContactNoticesEnum{
                shared.TransferDomainRequestContactNoticesEnumContactNoticeUnspecified,
                shared.TransferDomainRequestContactNoticesEnumContactNoticeUnspecified,
                shared.TransferDomainRequestContactNoticesEnumContactNoticeUnspecified,
            },
            Registration: &shared.RegistrationInput{
                ContactSettings: &shared.ContactSettings{
                    AdminContact: &shared.Contact{
                        Email: sdk.String("Alberto_Lehner@yahoo.com"),
                        FaxNumber: sdk.String("corporis"),
                        PhoneNumber: sdk.String("et"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "ex",
                                "sed",
                                "sit",
                            },
                            AdministrativeArea: sdk.String("vel"),
                            LanguageCode: sdk.String("nostrum"),
                            Locality: sdk.String("saepe"),
                            Organization: sdk.String("error"),
                            PostalCode: sdk.String("29261"),
                            Recipients: []string{
                                "occaecati",
                            },
                            RegionCode: sdk.String("labore"),
                            Revision: sdk.Int(695270),
                            SortingCode: sdk.String("atque"),
                            Sublocality: sdk.String("laborum"),
                        },
                    },
                    Privacy: shared.ContactSettingsPrivacyEnumPrivateContactData.ToPointer(),
                    RegistrantContact: &shared.Contact{
                        Email: sdk.String("Giles64@hotmail.com"),
                        FaxNumber: sdk.String("voluptate"),
                        PhoneNumber: sdk.String("unde"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "provident",
                                "repellendus",
                                "delectus",
                                "voluptates",
                            },
                            AdministrativeArea: sdk.String("perferendis"),
                            LanguageCode: sdk.String("est"),
                            Locality: sdk.String("quidem"),
                            Organization: sdk.String("reprehenderit"),
                            PostalCode: sdk.String("65630-7905"),
                            Recipients: []string{
                                "asperiores",
                                "totam",
                            },
                            RegionCode: sdk.String("suscipit"),
                            Revision: sdk.Int(693957),
                            SortingCode: sdk.String("maxime"),
                            Sublocality: sdk.String("et"),
                        },
                    },
                    TechnicalContact: &shared.Contact{
                        Email: sdk.String("Dannie_Shields@yahoo.com"),
                        FaxNumber: sdk.String("error"),
                        PhoneNumber: sdk.String("officiis"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "accusamus",
                                "natus",
                                "minima",
                                "aspernatur",
                            },
                            AdministrativeArea: sdk.String("ex"),
                            LanguageCode: sdk.String("maiores"),
                            Locality: sdk.String("corrupti"),
                            Organization: sdk.String("at"),
                            PostalCode: sdk.String("53955-1968"),
                            Recipients: []string{
                                "reiciendis",
                                "doloremque",
                            },
                            RegionCode: sdk.String("repudiandae"),
                            Revision: sdk.Int(116098),
                            SortingCode: sdk.String("accusantium"),
                            Sublocality: sdk.String("beatae"),
                        },
                    },
                },
                DNSSettings: &shared.DNSSettingsInput{
                    CustomDNS: &shared.CustomDNS{
                        DsRecords: []shared.DsRecord{
                            shared.DsRecord{
                                Algorithm: shared.DsRecordAlgorithmEnumRsasha1.ToPointer(),
                                Digest: sdk.String("laboriosam"),
                                DigestType: shared.DsRecordDigestTypeEnumSha1.ToPointer(),
                                KeyTag: sdk.Int(952143),
                            },
                        },
                        NameServers: []string{
                            "magnam",
                            "saepe",
                            "consequuntur",
                        },
                    },
                    GlueRecords: []shared.GlueRecord{
                        shared.GlueRecord{
                            HostName: sdk.String("unfinished-norm.info"),
                            Ipv4Addresses: []string{
                                "eveniet",
                            },
                            Ipv6Addresses: []string{
                                "consequuntur",
                                "fugit",
                                "id",
                            },
                        },
                        shared.GlueRecord{
                            HostName: sdk.String("glistening-human.name"),
                            Ipv4Addresses: []string{
                                "corporis",
                            },
                            Ipv6Addresses: []string{
                                "eveniet",
                                "non",
                                "vero",
                            },
                        },
                        shared.GlueRecord{
                            HostName: sdk.String("any-hope.com"),
                            Ipv4Addresses: []string{
                                "quae",
                                "molestiae",
                                "eveniet",
                            },
                            Ipv6Addresses: []string{
                                "cum",
                            },
                        },
                    },
                    GoogleDomainsDNS: &shared.GoogleDomainsDNSInput{
                        DsState: shared.GoogleDomainsDNSDsStateEnumDsRecordsUnpublished.ToPointer(),
                    },
                },
                DomainName: sdk.String("necessitatibus"),
                Labels: map[string]string{
                    "laborum": "distinctio",
                },
                ManagementSettings: &shared.ManagementSettingsInput{
                    TransferLockState: shared.ManagementSettingsTransferLockStateEnumUnlocked.ToPointer(),
                },
                PendingContactSettings: &shared.ContactSettings{
                    AdminContact: &shared.Contact{
                        Email: sdk.String("Elliott.Hammes36@yahoo.com"),
                        FaxNumber: sdk.String("perspiciatis"),
                        PhoneNumber: sdk.String("nihil"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "voluptas",
                                "alias",
                                "maiores",
                            },
                            AdministrativeArea: sdk.String("reiciendis"),
                            LanguageCode: sdk.String("dolores"),
                            Locality: sdk.String("id"),
                            Organization: sdk.String("minima"),
                            PostalCode: sdk.String("62096"),
                            Recipients: []string{
                                "molestiae",
                                "ex",
                            },
                            RegionCode: sdk.String("ut"),
                            Revision: sdk.Int(633062),
                            SortingCode: sdk.String("adipisci"),
                            Sublocality: sdk.String("debitis"),
                        },
                    },
                    Privacy: shared.ContactSettingsPrivacyEnumPrivateContactData.ToPointer(),
                    RegistrantContact: &shared.Contact{
                        Email: sdk.String("Fredy_Ward@yahoo.com"),
                        FaxNumber: sdk.String("quis"),
                        PhoneNumber: sdk.String("eum"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "provident",
                                "aspernatur",
                                "ullam",
                                "quasi",
                            },
                            AdministrativeArea: sdk.String("animi"),
                            LanguageCode: sdk.String("nostrum"),
                            Locality: sdk.String("mollitia"),
                            Organization: sdk.String("provident"),
                            PostalCode: sdk.String("64309-9347"),
                            Recipients: []string{
                                "officia",
                                "laborum",
                                "placeat",
                                "modi",
                            },
                            RegionCode: sdk.String("voluptatibus"),
                            Revision: sdk.Int(564064),
                            SortingCode: sdk.String("officiis"),
                            Sublocality: sdk.String("sapiente"),
                        },
                    },
                    TechnicalContact: &shared.Contact{
                        Email: sdk.String("Bessie33@hotmail.com"),
                        FaxNumber: sdk.String("inventore"),
                        PhoneNumber: sdk.String("fugit"),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "quae",
                                "perferendis",
                                "velit",
                                "aspernatur",
                            },
                            AdministrativeArea: sdk.String("eum"),
                            LanguageCode: sdk.String("eius"),
                            Locality: sdk.String("rem"),
                            Organization: sdk.String("at"),
                            PostalCode: sdk.String("19413-1559"),
                            Recipients: []string{
                                "hic",
                                "illum",
                                "eaque",
                            },
                            RegionCode: sdk.String("earum"),
                            Revision: sdk.Int(596211),
                            SortingCode: sdk.String("maiores"),
                            Sublocality: sdk.String("debitis"),
                        },
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
            YearlyPrice: &shared.Money{
                CurrencyCode: sdk.String("aliquid"),
                Nanos: sdk.Int(780931),
                Units: sdk.String("suscipit"),
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("animi"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DomainsProjectsLocationsRegistrationsTransferSecurity{
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
