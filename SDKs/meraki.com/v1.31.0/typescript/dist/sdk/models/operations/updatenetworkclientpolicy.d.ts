import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkClientPolicyRequestBody extends SpeakeasyBase {
    /**
     * The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: string;
    /**
     * [optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID.
     */
    groupPolicyId?: string;
}
export declare class UpdateNetworkClientPolicyRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkClientPolicyRequestBody;
    clientId: string;
    networkId: string;
}
export declare class UpdateNetworkClientPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkClientPolicy200ApplicationJSONObject?: Record<string, any>;
}
