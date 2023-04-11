import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceContentFiltering200ApplicationJSONObject?: Record<string, any>;
}
