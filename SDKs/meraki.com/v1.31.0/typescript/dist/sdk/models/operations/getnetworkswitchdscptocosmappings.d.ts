import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchDscpToCosMappings200ApplicationJSONObject?: Record<string, any>;
}
