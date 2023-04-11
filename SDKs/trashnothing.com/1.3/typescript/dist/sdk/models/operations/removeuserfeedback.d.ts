import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveUserFeedbackRequest extends SpeakeasyBase {
    /**
     * A user ID.
     */
    userId: string;
}
/**
 * The updated user.
 */
export declare class RemoveUserFeedback200ApplicationJSON extends SpeakeasyBase {
    user?: shared.User;
}
export declare class RemoveUserFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated user.
     */
    removeUserFeedback200ApplicationJSONObject?: RemoveUserFeedback200ApplicationJSON;
}
