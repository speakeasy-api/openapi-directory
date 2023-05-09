# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/orgpolicy/v2/go
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
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudOrgpolicyV2CustomConstraintInput: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: shared.GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumAllow.ToPointer(),
            Condition: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumUpdate,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumDelete,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumCreate,
                shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumUpdate,
            },
            Name: sdk.String("Rick Kertzmann"),
            ResourceTypes: []string{
                "delectus",
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudOrgpolicyV2CustomConstraint != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Organizations](docs/organizations/README.md)

* [OrgpolicyOrganizationsCustomConstraintsCreate](docs/organizations/README.md#orgpolicyorganizationscustomconstraintscreate) - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* [OrgpolicyOrganizationsCustomConstraintsList](docs/organizations/README.md#orgpolicyorganizationscustomconstraintslist) - Retrieves all of the custom constraints that exist on a particular organization resource.

### [Projects](docs/projects/README.md)

* [OrgpolicyProjectsConstraintsList](docs/projects/README.md#orgpolicyprojectsconstraintslist) - Lists constraints that could be applied on the specified resource.
* [OrgpolicyProjectsPoliciesCreate](docs/projects/README.md#orgpolicyprojectspoliciescreate) - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* [OrgpolicyProjectsPoliciesDelete](docs/projects/README.md#orgpolicyprojectspoliciesdelete) - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* [OrgpolicyProjectsPoliciesGet](docs/projects/README.md#orgpolicyprojectspoliciesget) - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* [OrgpolicyProjectsPoliciesGetEffectivePolicy](docs/projects/README.md#orgpolicyprojectspoliciesgeteffectivepolicy) - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [OrgpolicyProjectsPoliciesList](docs/projects/README.md#orgpolicyprojectspolicieslist) - Retrieves all of the policies that exist on a particular resource.
* [OrgpolicyProjectsPoliciesPatch](docs/projects/README.md#orgpolicyprojectspoliciespatch) - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
