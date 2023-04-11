import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for OrgMembershipsService.MoveOrgMembership.
 */
export declare class MoveOrgMembershipRequest extends SpeakeasyBase {
    /**
     * Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.
     */
    customer?: string;
    /**
     * Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).
     */
    destinationOrgUnit?: string;
}
