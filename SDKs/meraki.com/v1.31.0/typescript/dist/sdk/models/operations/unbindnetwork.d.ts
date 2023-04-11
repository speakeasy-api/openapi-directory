import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnbindNetworkRequestBody extends SpeakeasyBase {
    /**
     * Optional boolean to retain all the current configs given by the template.
     */
    retainConfigs?: boolean;
}
export declare class UnbindNetworkRequest extends SpeakeasyBase {
    requestBody?: UnbindNetworkRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class UnbindNetwork200ApplicationJSON extends SpeakeasyBase {
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
export declare class UnbindNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    unbindNetwork200ApplicationJSONObject?: UnbindNetwork200ApplicationJSON;
}
