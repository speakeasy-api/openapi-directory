import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStacksRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchStacksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStacks200ApplicationJSONObjects?: Record<string, any>[];
}
