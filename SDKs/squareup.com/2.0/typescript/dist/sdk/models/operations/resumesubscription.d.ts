import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResumeSubscriptionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ResumeSubscriptionRequest extends SpeakeasyBase {
    /**
     * The ID of the subscription to resume.
     */
    subscriptionId: string;
}
export declare class ResumeSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resumeSubscriptionResponse?: shared.ResumeSubscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
