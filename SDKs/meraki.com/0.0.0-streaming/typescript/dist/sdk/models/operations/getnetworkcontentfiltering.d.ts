import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkContentFilteringRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkContentFiltering200ApplicationJSONObject?: Record<string, any>;
}
