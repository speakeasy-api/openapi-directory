import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
    attemptId: string;
    networkId: string;
}
export declare class GetNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject?: Record<string, any>;
}
