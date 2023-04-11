import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ActivityHistory extends SpeakeasyBase {
    /**
     * When this record was created
     */
    createdAt?: Date;
    /**
     * Attributes from associated records. This is specific to the type of activity and may change over time. Not returned for create requests
     */
    dynamicData?: Record<string, any>;
    /**
     * A list of remote resource names that failed to load. This is specific to the type of activity and may change over time. Not returned for create requests
     */
    failedDynamicResources?: Record<string, any>;
    /**
     * ID of this activity
     */
    id?: number;
    /**
     * When this activity occurred
     */
    occurredAt?: Date;
    /**
     * When this record was pinned
     */
    pinnedAt?: Date;
    /**
     * ID of the resource this activity is for. It will be a string for the following resource types: crm_opportunity
     */
    resourceId?: number;
    /**
     * Type of the resource this activity is for. One of: account, person
     */
    resourceType?: number;
    /**
     * The static data for this activity
     */
    staticData?: Record<string, any>;
    /**
     * The type of activity
     */
    type?: string;
    /**
     * When this record was updated
     */
    updatedAt?: Date;
    /**
     * UUID of the user this activity is for
     */
    userGuid?: string;
}
