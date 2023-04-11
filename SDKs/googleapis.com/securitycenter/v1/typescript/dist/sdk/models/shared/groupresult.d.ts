import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result containing the properties and count of a groupBy request.
 */
export declare class GroupResult extends SpeakeasyBase {
    /**
     * Total count of resources for the given properties.
     */
    count?: string;
    /**
     * Properties matching the groupBy fields in the request.
     */
    properties?: Record<string, any>;
}
