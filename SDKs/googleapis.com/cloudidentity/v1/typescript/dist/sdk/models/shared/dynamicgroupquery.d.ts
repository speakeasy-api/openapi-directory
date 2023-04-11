import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource type for the Dynamic Group Query
 */
export declare enum DynamicGroupQueryResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    User = "USER"
}
/**
 * Defines a query on a resource.
 */
export declare class DynamicGroupQuery extends SpeakeasyBase {
    /**
     * Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')`
     */
    query?: string;
    /**
     * Resource type for the Dynamic Group Query
     */
    resourceType?: DynamicGroupQueryResourceTypeEnum;
}
