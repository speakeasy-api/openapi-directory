import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkSmBypassActivationLockAttemptRequestBody extends SpeakeasyBase {
    /**
     * The ids of the devices to attempt activation lock bypass.
     */
    ids: string[];
}
export declare class CreateNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSmBypassActivationLockAttemptRequestBody;
    networkId: string;
}
export declare class CreateNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject?: Record<string, any>;
}
