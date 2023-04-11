import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Delete continuous project subscription
     */
    subscription?: shared.Subscription;
}
