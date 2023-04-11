import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShapingRules200ApplicationJSONObject?: Record<string, any>;
}
