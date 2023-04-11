import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApiV1PushSubscriptionSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PutApiV1PushSubscriptionRequestBody extends SpeakeasyBase {
    data: string;
}
export declare class PutApiV1PushSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    /**
     * Updating a PushSubscription to only receive mention alerts
     */
    pushSubscription?: shared.PushSubscription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
