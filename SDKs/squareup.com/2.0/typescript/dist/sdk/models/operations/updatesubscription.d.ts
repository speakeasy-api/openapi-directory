import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriptionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateSubscriptionRequest: shared.UpdateSubscriptionRequest;
    /**
     * The ID for the subscription to update.
     */
    subscriptionId: string;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSubscriptionResponse?: shared.UpdateSubscriptionResponse;
}
