import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class GetSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get continuous project subscription
     */
    subscription?: shared.Subscription;
}
