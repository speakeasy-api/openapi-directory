import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchLinkAggregationsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchLinkAggregationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchLinkAggregations200ApplicationJSONObjects?: Record<string, any>[];
}
