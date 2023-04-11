import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SyncRequest extends SpeakeasyBase {
    syncRequest: shared.SyncRequest;
    clientId?: string;
    connectionId?: string;
    watch?: boolean;
    withInaccessibleCids?: boolean;
}
export declare class SyncResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    syncResponse?: shared.SyncResponse;
}
