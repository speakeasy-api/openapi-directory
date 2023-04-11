import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the SQL integration.
 */
export declare enum SqlIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Ready = "READY"
}
/**
 * Represents the SQL instance integrated with Managed AD.
 */
export declare class SqlIntegration extends SpeakeasyBase {
    /**
     * Output only. The time the SQL integration was created.
     */
    createTime?: string;
    /**
     * The unique name of the SQL integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}`
     */
    name?: string;
    /**
     * The full resource name of an integrated SQL instance
     */
    sqlInstance?: string;
    /**
     * Output only. The current state of the SQL integration.
     */
    state?: SqlIntegrationStateEnum;
    /**
     * Output only. The time the SQL integration was updated.
     */
    updateTime?: string;
}
