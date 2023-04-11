import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    subscription: shared.Subscription;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Updated continuous project subscription
     */
    subscription?: shared.Subscription;
}
