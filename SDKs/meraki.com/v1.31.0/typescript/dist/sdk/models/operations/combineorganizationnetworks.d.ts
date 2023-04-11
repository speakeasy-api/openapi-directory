import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CombineOrganizationNetworksRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.
     */
    enrollmentString?: string;
    /**
     * The name of the combined network
     */
    name: string;
    /**
     * A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network
     */
    networkIds: string[];
}
export declare class CombineOrganizationNetworksRequest extends SpeakeasyBase {
    requestBody: CombineOrganizationNetworksRequestBody;
    organizationId: string;
}
/**
 * Network after the combination
 */
export declare class CombineOrganizationNetworks200ApplicationJSONResultingNetwork extends SpeakeasyBase {
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
/**
 * Successful operation
 */
export declare class CombineOrganizationNetworks200ApplicationJSON extends SpeakeasyBase {
    /**
     * Network after the combination
     */
    resultingNetwork?: CombineOrganizationNetworks200ApplicationJSONResultingNetwork;
}
export declare class CombineOrganizationNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    combineOrganizationNetworks200ApplicationJSONObject?: CombineOrganizationNetworks200ApplicationJSON;
}
