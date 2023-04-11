import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateJsonRequest extends SpeakeasyBase {
    /**
     * Details of the Subscription to change
     */
    subscriptionUpdate: shared.SubscriptionUpdate;
    /**
     * Unique identifier of the Subscription to update
     */
    subscriptionId: string;
}
export declare class UpdateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
