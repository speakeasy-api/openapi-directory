import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSubscriptionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveSubscriptionRequest extends SpeakeasyBase {
    /**
     * The ID of the subscription to retrieve.
     */
    subscriptionId: string;
}
export declare class RetrieveSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveSubscriptionResponse?: shared.RetrieveSubscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
