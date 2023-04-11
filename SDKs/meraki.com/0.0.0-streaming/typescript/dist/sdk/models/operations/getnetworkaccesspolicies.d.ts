import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAccessPoliciesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAccessPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAccessPolicies200ApplicationJSONObjects?: Record<string, any>[];
}
