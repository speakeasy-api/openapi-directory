import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings extends SpeakeasyBase {
    /**
     * The actual layer-2 CoS queue the DSCP value is mapped to. These are not bits set on outgoing frames. Value can be in the range of 0 to 5 inclusive.
     */
    cos: number;
    /**
     * The Differentiated Services Code Point (DSCP) tag in the IP header that will be mapped to a particular Class-of-Service (CoS) queue. Value can be in the range of 0 to 63 inclusive.
     */
    dscp: number;
    /**
     * Label for the mapping (optional).
     */
    title?: string;
}
export declare class UpdateNetworkSwitchDscpToCosMappingsRequestBody extends SpeakeasyBase {
    /**
     * An array of DSCP to CoS mappings. An empty array will reset the mappings to default.
     */
    mappings: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[];
}
export declare class UpdateNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSwitchDscpToCosMappingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject?: Record<string, any>;
}
