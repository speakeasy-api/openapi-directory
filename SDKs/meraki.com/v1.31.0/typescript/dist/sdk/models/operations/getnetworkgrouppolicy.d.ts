import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkGroupPolicyRequest extends SpeakeasyBase {
    groupPolicyId: string;
    networkId: string;
}
export declare class GetNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkGroupPolicy200ApplicationJSONObject?: Record<string, any>;
}
