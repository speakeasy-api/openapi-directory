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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudOrgpolicyV2CustomConstraintInput: &shared.GoogleCloudOrgpolicyV2CustomConstraintInput{
            ActionType: "ALLOW",
            Condition: "distinctio",
            Description: "quibusdam",
            DisplayName: "unde",
            MethodTypes: []shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum{
                "UPDATE",
                "DELETE",
                "CREATE",
                "UPDATE",
            },
            Name: "deserunt",
            ResourceTypes: []string{
                "iure",
                "magnam",
            },
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Organizations.OrgpolicyOrganizationsCustomConstraintsCreate(ctx, req, operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity{
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


### Organizations

* `OrgpolicyOrganizationsCustomConstraintsCreate` - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* `OrgpolicyOrganizationsCustomConstraintsList` - Retrieves all of the custom constraints that exist on a particular organization resource.

### Projects

* `OrgpolicyProjectsConstraintsList` - Lists constraints that could be applied on the specified resource.
* `OrgpolicyProjectsPoliciesCreate` - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* `OrgpolicyProjectsPoliciesDelete` - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* `OrgpolicyProjectsPoliciesGet` - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* `OrgpolicyProjectsPoliciesGetEffectivePolicy` - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* `OrgpolicyProjectsPoliciesList` - Retrieves all of the policies that exist on a particular resource.
* `OrgpolicyProjectsPoliciesPatch` - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
