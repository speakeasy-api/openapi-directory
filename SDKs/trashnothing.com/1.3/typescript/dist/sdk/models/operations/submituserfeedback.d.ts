import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitUserFeedbackRequestBody extends SpeakeasyBase {
    /**
     * For positive feedback, category should not be set. <br /><br /> For negative feedback, category should be set to one of: NO_SHOW, UNRESPONSIVE, LATE_OR_TOO_EARLY, ITEM_NOT_AS_DESCRIBED, BROKEN_PROMISE, RUDE, RESELLER, SELLING, UNWANTED_MESSAGES, COMMUNICATION, OTHER <br /><br /> Below are descriptions for each of these categories: <br /><br /> **NO_SHOW** - The user did not show up when they said they would.<br /> **UNRESPONSIVE** - The user failed to respond when a response was expected.<br /> **LATE_OR_TOO_EARLY** - The user showed up later than they said they would (or too early).<br /> **ITEM_NOT_AS_DESCRIBED** - The user gave away an item that had a misleading on incomplete description.<br /> **BROKEN_PROMISE** - The user broke a promise.<br /> **RUDE** - The user was rude or impolite.<br /> **RESELLER** - The user is obtaining free items to sell on other sites without disclosing their intent to resell.<br /> **SELLING** - The user is selling items on trash nothing.<br /> **UNWANTED_MESSAGES** - The user is sending off-topic or unrelated messages.<br />           **COMMUNICATION** - The users' communication is unclear, confusing or bad.<br /> **OTHER** - This category is for anything that does not fit in any of the above categories.
     *
     * @remarks
     *
     */
    category?: string;
    /**
     * A comment written by the current user about the user they are leaving feedback on. This is optional for positive feedback but is required for negative feedback.
     *
     * @remarks
     *
     */
    content?: string;
    /**
     * If set to 1, the feedback is positive.  If set to 0, the feedback is negative.
     */
    positive: number;
}
export declare class SubmitUserFeedbackRequest extends SpeakeasyBase {
    requestBody: SubmitUserFeedbackRequestBody;
    /**
     * A user ID.
     */
    userId: string;
}
/**
 * The updated user and feedback.
 */
export declare class SubmitUserFeedback200ApplicationJSON extends SpeakeasyBase {
    feedback?: shared.Feedback;
    user?: shared.User;
}
export declare class SubmitUserFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated user and feedback.
     */
    submitUserFeedback200ApplicationJSONObject?: SubmitUserFeedback200ApplicationJSON;
}
