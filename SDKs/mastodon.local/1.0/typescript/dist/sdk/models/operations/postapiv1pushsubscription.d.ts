import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1PushSubscriptionSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1PushSubscriptionRequestBody extends SpeakeasyBase {
    data: string;
    subscription: string;
}
export declare class PostApiV1PushSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * PushSubscription created
     */
    pushSubscription?: shared.PushSubscription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
