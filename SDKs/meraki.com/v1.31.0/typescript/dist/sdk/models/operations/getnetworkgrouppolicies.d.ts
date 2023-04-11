import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkGroupPoliciesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkGroupPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkGroupPolicies200ApplicationJSONObjects?: Record<string, any>[];
}
