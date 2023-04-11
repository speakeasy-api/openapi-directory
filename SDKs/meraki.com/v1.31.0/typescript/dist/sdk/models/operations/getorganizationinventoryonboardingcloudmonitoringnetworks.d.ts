import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Device Type switch or wireless controller
 */
export declare enum GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum {
    Switch = "switch",
    WirelessController = "wireless_controller"
}
export declare class GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest extends SpeakeasyBase {
    /**
     * Device Type switch or wireless controller
     */
    deviceType: GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSON extends SpeakeasyBase {
    /**
     * Enrollment string for the network
     */
    enrollmentString?: string;
    /**
     * Network ID
     */
    id?: string;
    /**
     * If the network is bound to a config template
     */
    isBoundToConfigTemplate?: boolean;
    /**
     * Network name
     */
    name?: string;
    /**
     * Notes for the network
     */
    notes?: string;
    /**
     * Organization ID
     */
    organizationId?: string;
    /**
     * List of the product types that the network supports
     */
    productTypes?: string[];
    /**
     * Network tags
     */
    tags?: string[];
    /**
     * Timezone of the network
     */
    timeZone?: string;
    /**
     * URL to the network Dashboard UI
     */
    url?: string;
}
export declare class GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects?: GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSON[];
}
