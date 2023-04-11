import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelSubscriptionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelSubscriptionRequest extends SpeakeasyBase {
    /**
     * The ID of the subscription to cancel.
     */
    subscriptionId: string;
}
export declare class CancelSubscriptionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelSubscriptionResponse?: shared.CancelSubscriptionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
