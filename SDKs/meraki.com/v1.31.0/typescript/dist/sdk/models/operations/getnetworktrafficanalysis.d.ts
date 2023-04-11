import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkTrafficAnalysisRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkTrafficAnalysis200ApplicationJSONObject?: Record<string, any>;
}
