import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkOneToManyNatRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkOneToManyNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkOneToManyNatRules200ApplicationJSONObject?: Record<string, any>;
}
