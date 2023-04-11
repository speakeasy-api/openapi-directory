import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SfdcInstance resource use to hold channels and connection config data.
 */
export declare class GoogleCloudIntegrationsV1alphaSfdcInstance extends SpeakeasyBase {
    /**
     * A list of AuthConfigs that can be tried to open the channel to SFDC
     */
    authConfigId?: string[];
    /**
     * Output only. Time when the instance is created
     */
    createTime?: string;
    /**
     * Output only. Time when the instance was deleted. Empty if not deleted.
     */
    deleteTime?: string;
    /**
     * A description of the sfdc instance.
     */
    description?: string;
    /**
     * User selected unique name/alias to easily reference an instance.
     */
    displayName?: string;
    /**
     * Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     */
    name?: string;
    /**
     * URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).
     */
    serviceAuthority?: string;
    /**
     * The SFDC Org Id. This is defined in salesforce.
     */
    sfdcOrgId?: string;
    /**
     * Output only. Time when the instance was last updated
     */
    updateTime?: string;
}
/**
 * The SfdcInstance resource use to hold channels and connection config data.
 */
export declare class GoogleCloudIntegrationsV1alphaSfdcInstanceInput extends SpeakeasyBase {
    /**
     * A list of AuthConfigs that can be tried to open the channel to SFDC
     */
    authConfigId?: string[];
    /**
     * A description of the sfdc instance.
     */
    description?: string;
    /**
     * User selected unique name/alias to easily reference an instance.
     */
    displayName?: string;
    /**
     * Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
     */
    name?: string;
    /**
     * URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).
     */
    serviceAuthority?: string;
    /**
     * The SFDC Org Id. This is defined in salesforce.
     */
    sfdcOrgId?: string;
}
