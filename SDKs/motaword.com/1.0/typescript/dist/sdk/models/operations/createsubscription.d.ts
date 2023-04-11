import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    subscription: shared.Subscription;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Newly created continuous project subscription
     */
    subscription?: shared.Subscription;
}
