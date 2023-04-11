import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Immutable. Entity type for the org member.
 */
export declare enum OrgMembershipTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    SharedDrive = "SHARED_DRIVE"
}
/**
 * A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
 */
export declare class OrgMembership extends SpeakeasyBase {
    /**
     * Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).
     */
    member?: string;
    /**
     * Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).
     */
    memberUri?: string;
    /**
     * Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.
     */
    name?: string;
    /**
     * Immutable. Entity type for the org member.
     */
    type?: OrgMembershipTypeEnum;
}
