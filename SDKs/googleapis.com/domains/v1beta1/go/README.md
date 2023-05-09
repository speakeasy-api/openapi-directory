# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/domains/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: "Ben Mueller",
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DomainsProjectsLocationsList](docs/projects/README.md#domainsprojectslocationslist) - Lists information about the supported locations for this service.
* [DomainsProjectsLocationsOperationsList](docs/projects/README.md#domainsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DomainsProjectsLocationsRegistrationsConfigureContactSettings](docs/projects/README.md#domainsprojectslocationsregistrationsconfigurecontactsettings) - Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
* [DomainsProjectsLocationsRegistrationsConfigureDNSSettings](docs/projects/README.md#domainsprojectslocationsregistrationsconfigurednssettings) - Updates a `Registration`'s DNS settings.
* [DomainsProjectsLocationsRegistrationsConfigureManagementSettings](docs/projects/README.md#domainsprojectslocationsregistrationsconfiguremanagementsettings) - Updates a `Registration`'s management settings.
* [DomainsProjectsLocationsRegistrationsDelete](docs/projects/README.md#domainsprojectslocationsregistrationsdelete) - Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [DomainsProjectsLocationsRegistrationsExport](docs/projects/README.md#domainsprojectslocationsregistrationsexport) - Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [DomainsProjectsLocationsRegistrationsGet](docs/projects/README.md#domainsprojectslocationsregistrationsget) - Gets the details of a `Registration` resource.
* [DomainsProjectsLocationsRegistrationsGetIamPolicy](docs/projects/README.md#domainsprojectslocationsregistrationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DomainsProjectsLocationsRegistrationsImport](docs/projects/README.md#domainsprojectslocationsregistrationsimport) - Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
* [DomainsProjectsLocationsRegistrationsList](docs/projects/README.md#domainsprojectslocationsregistrationslist) - Lists the `Registration` resources in a project.
* [DomainsProjectsLocationsRegistrationsPatch](docs/projects/README.md#domainsprojectslocationsregistrationspatch) - Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
* [DomainsProjectsLocationsRegistrationsRegister](docs/projects/README.md#domainsprojectslocationsregistrationsregister) - Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
* [DomainsProjectsLocationsRegistrationsResetAuthorizationCode](docs/projects/README.md#domainsprojectslocationsregistrationsresetauthorizationcode) - Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
* [DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCode](docs/projects/README.md#domainsprojectslocationsregistrationsretrieveauthorizationcode) - Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
* [DomainsProjectsLocationsRegistrationsRetrieveImportableDomains](docs/projects/README.md#domainsprojectslocationsregistrationsretrieveimportabledomains) - Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
* [DomainsProjectsLocationsRegistrationsRetrieveRegisterParameters](docs/projects/README.md#domainsprojectslocationsregistrationsretrieveregisterparameters) - Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
* [DomainsProjectsLocationsRegistrationsRetrieveTransferParameters](docs/projects/README.md#domainsprojectslocationsregistrationsretrievetransferparameters) - Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
* [DomainsProjectsLocationsRegistrationsSearchDomains](docs/projects/README.md#domainsprojectslocationsregistrationssearchdomains) - Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
* [DomainsProjectsLocationsRegistrationsSetIamPolicy](docs/projects/README.md#domainsprojectslocationsregistrationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DomainsProjectsLocationsRegistrationsTestIamPermissions](docs/projects/README.md#domainsprojectslocationsregistrationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DomainsProjectsLocationsRegistrationsTransfer](docs/projects/README.md#domainsprojectslocationsregistrationstransfer) - Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
