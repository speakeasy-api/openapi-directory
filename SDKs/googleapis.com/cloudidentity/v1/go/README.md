# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudidentity/v1/go
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
    res, err := s.Customers.CloudidentityCustomersUserinvitationsCancel(ctx, operations.CloudidentityCustomersUserinvitationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Customers](docs/customers/README.md)

* [CloudidentityCustomersUserinvitationsCancel](docs/customers/README.md#cloudidentitycustomersuserinvitationscancel) - Cancels a UserInvitation that was already sent.
* [CloudidentityCustomersUserinvitationsIsInvitableUser](docs/customers/README.md#cloudidentitycustomersuserinvitationsisinvitableuser) - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
* [CloudidentityCustomersUserinvitationsList](docs/customers/README.md#cloudidentitycustomersuserinvitationslist) - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
* [CloudidentityCustomersUserinvitationsSend](docs/customers/README.md#cloudidentitycustomersuserinvitationssend) - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

### [Devices](docs/devices/README.md)

* [CloudidentityDevicesCreate](docs/devices/README.md#cloudidentitydevicescreate) - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* [CloudidentityDevicesDeviceUsersApprove](docs/devices/README.md#cloudidentitydevicesdeviceusersapprove) - Approves device to access user data.
* [CloudidentityDevicesDeviceUsersBlock](docs/devices/README.md#cloudidentitydevicesdeviceusersblock) - Blocks device from accessing user data
* [CloudidentityDevicesDeviceUsersCancelWipe](docs/devices/README.md#cloudidentitydevicesdeviceuserscancelwipe) - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* [CloudidentityDevicesDeviceUsersClientStatesList](docs/devices/README.md#cloudidentitydevicesdeviceusersclientstateslist) - Lists the client states for the given search query.
* [CloudidentityDevicesDeviceUsersList](docs/devices/README.md#cloudidentitydevicesdeviceuserslist) - Lists/Searches DeviceUsers.
* [CloudidentityDevicesDeviceUsersLookup](docs/devices/README.md#cloudidentitydevicesdeviceuserslookup) - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* [CloudidentityDevicesDeviceUsersWipe](docs/devices/README.md#cloudidentitydevicesdeviceuserswipe) - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
* [CloudidentityDevicesList](docs/devices/README.md#cloudidentitydeviceslist) - Lists/Searches devices.

### [Groups](docs/groups/README.md)

* [CloudidentityGroupsCreate](docs/groups/README.md#cloudidentitygroupscreate) - Creates a Group.
* [CloudidentityGroupsList](docs/groups/README.md#cloudidentitygroupslist) - Lists the `Group` resources under a customer or namespace.
* [CloudidentityGroupsLookup](docs/groups/README.md#cloudidentitygroupslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* [CloudidentityGroupsMembershipsCheckTransitiveMembership](docs/groups/README.md#cloudidentitygroupsmembershipschecktransitivemembership) - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* [CloudidentityGroupsMembershipsCreate](docs/groups/README.md#cloudidentitygroupsmembershipscreate) - Creates a `Membership`.
* [CloudidentityGroupsMembershipsGetMembershipGraph](docs/groups/README.md#cloudidentitygroupsmembershipsgetmembershipgraph) - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* [CloudidentityGroupsMembershipsList](docs/groups/README.md#cloudidentitygroupsmembershipslist) - Lists the `Membership`s within a `Group`.
* [CloudidentityGroupsMembershipsLookup](docs/groups/README.md#cloudidentitygroupsmembershipslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* [CloudidentityGroupsMembershipsModifyMembershipRoles](docs/groups/README.md#cloudidentitygroupsmembershipsmodifymembershiproles) - Modifies the `MembershipRole`s of a `Membership`.
* [CloudidentityGroupsMembershipsSearchDirectGroups](docs/groups/README.md#cloudidentitygroupsmembershipssearchdirectgroups) - Searches direct groups of a member.
* [CloudidentityGroupsMembershipsSearchTransitiveGroups](docs/groups/README.md#cloudidentitygroupsmembershipssearchtransitivegroups) - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* [CloudidentityGroupsMembershipsSearchTransitiveMemberships](docs/groups/README.md#cloudidentitygroupsmembershipssearchtransitivememberships) - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* [CloudidentityGroupsSearch](docs/groups/README.md#cloudidentitygroupssearch) - Searches for `Group` resources matching a specified query.

### [InboundSamlSsoProfiles](docs/inboundsamlssoprofiles/README.md)

* [CloudidentityInboundSamlSsoProfilesCreate](docs/inboundsamlssoprofiles/README.md#cloudidentityinboundsamlssoprofilescreate) - Creates an InboundSamlSsoProfile for a customer.
* [CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd](docs/inboundsamlssoprofiles/README.md#cloudidentityinboundsamlssoprofilesidpcredentialsadd) - Adds an IdpCredential. Up to 2 credentials are allowed.
* [CloudidentityInboundSamlSsoProfilesIdpCredentialsList](docs/inboundsamlssoprofiles/README.md#cloudidentityinboundsamlssoprofilesidpcredentialslist) - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
* [CloudidentityInboundSamlSsoProfilesList](docs/inboundsamlssoprofiles/README.md#cloudidentityinboundsamlssoprofileslist) - Lists InboundSamlSsoProfiles for a customer.

### [InboundSsoAssignments](docs/inboundssoassignments/README.md)

* [CloudidentityInboundSsoAssignmentsCreate](docs/inboundssoassignments/README.md#cloudidentityinboundssoassignmentscreate) - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
* [CloudidentityInboundSsoAssignmentsDelete](docs/inboundssoassignments/README.md#cloudidentityinboundssoassignmentsdelete) - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
* [CloudidentityInboundSsoAssignmentsGet](docs/inboundssoassignments/README.md#cloudidentityinboundssoassignmentsget) - Gets an InboundSsoAssignment.
* [CloudidentityInboundSsoAssignmentsList](docs/inboundssoassignments/README.md#cloudidentityinboundssoassignmentslist) - Lists the InboundSsoAssignments for a `Customer`.
* [CloudidentityInboundSsoAssignmentsPatch](docs/inboundssoassignments/README.md#cloudidentityinboundssoassignmentspatch) - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
