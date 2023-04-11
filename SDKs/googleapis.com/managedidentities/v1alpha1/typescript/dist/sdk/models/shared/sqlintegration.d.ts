import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the managed OU.
 */
export declare enum SQLIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Ready = "READY"
}
/**
 * Represents the SQL instance integrated with AD.
 */
export declare class SQLIntegration extends SpeakeasyBase {
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}`
     */
    name?: string;
    /**
     * The full resource name of an integrated sql instance
     */
    sqlInstance?: string;
    /**
     * Output only. The current state of the managed OU.
     */
    state?: SQLIntegrationStateEnum;
    /**
     * Output only. Last update time for this SQL instance.
     */
    updateTime?: string;
}
