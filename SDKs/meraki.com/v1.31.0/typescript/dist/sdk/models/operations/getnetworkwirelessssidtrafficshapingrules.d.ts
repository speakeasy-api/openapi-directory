import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject?: Record<string, any>;
}
