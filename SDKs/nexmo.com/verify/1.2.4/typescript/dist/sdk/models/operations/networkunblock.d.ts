import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NetworkUnblockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Rate Limited
     */
    errorThrottled?: shared.ErrorThrottled;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    networkUnblockResponseForbidden?: shared.NetworkUnblockResponseForbidden;
    /**
     * Not Found
     */
    networkUnblockResponseNotFound?: shared.NetworkUnblockResponseNotFound;
    /**
     * Accepted
     */
    networkUnblockResponseOk?: shared.NetworkUnblockResponseOk;
    /**
     * Unprocessable Entity
     */
    networkUnblock422ApplicationJSONOneOf?: any;
}
