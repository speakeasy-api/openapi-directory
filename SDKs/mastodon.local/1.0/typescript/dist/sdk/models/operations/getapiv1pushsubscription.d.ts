import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1PushSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    /**
     * Get one PushSubscription
     */
    pushSubscription?: shared.PushSubscription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
