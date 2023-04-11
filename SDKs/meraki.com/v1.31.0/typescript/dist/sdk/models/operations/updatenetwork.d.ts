import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.
     */
    enrollmentString?: string;
    /**
     * The name of the network
     */
    name?: string;
    /**
     * Add any notes or additional information about this network here.
     */
    notes?: string;
    /**
     * A list of tags to be applied to the network
     */
    tags?: string[];
    /**
     * The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
     */
    timeZone?: string;
}
export declare class UpdateNetworkRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetwork200ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetwork200ApplicationJSONObject?: UpdateNetwork200ApplicationJSON;
}
