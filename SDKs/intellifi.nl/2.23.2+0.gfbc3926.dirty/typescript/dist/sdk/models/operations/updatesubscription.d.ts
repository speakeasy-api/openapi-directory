import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    /**
     * A JSON object containing sibscription information
     */
    subscriptionInput: shared.SubscriptionInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
