import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkOneToOneNatRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkOneToOneNatRules200ApplicationJSONObject?: Record<string, any>;
}
