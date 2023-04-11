import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An enum value of what the enablement state is for the given project
 */
export declare enum GoogleCloudIntegrationsV1alphaProjectPropertiesIpEnablementStateEnum {
    IpEnablementStateUnspecified = "IP_ENABLEMENT_STATE_UNSPECIFIED",
    IpEnablementStateStandalone = "IP_ENABLEMENT_STATE_STANDALONE",
    IpEnablementStateApigee = "IP_ENABLEMENT_STATE_APIGEE",
    IpEnablementStateApigeeEntitled = "IP_ENABLEMENT_STATE_APIGEE_ENTITLED"
}
/**
 * Metadata information for the given project
 */
export declare class GoogleCloudIntegrationsV1alphaProjectProperties extends SpeakeasyBase {
    /**
     * An enum value of what the enablement state is for the given project
     */
    ipEnablementState?: GoogleCloudIntegrationsV1alphaProjectPropertiesIpEnablementStateEnum;
    /**
     * A list of provisioned regions on the current project
     */
    provisionedRegions?: string[];
}
