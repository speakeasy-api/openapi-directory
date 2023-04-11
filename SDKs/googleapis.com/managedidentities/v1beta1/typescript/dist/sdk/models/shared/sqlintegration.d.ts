import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the sql integration.
 */
export declare enum SqlIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Ready = "READY"
}
/**
 * Represents the Sql instance integrated with AD.
 */
export declare class SqlIntegration extends SpeakeasyBase {
    /**
     * Output only. The time sql integration was created.
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
     * Output only. The current state of the sql integration.
     */
    state?: SqlIntegrationStateEnum;
    /**
     * Output only. The time sql integration was updated.
     */
    updateTime?: string;
}
