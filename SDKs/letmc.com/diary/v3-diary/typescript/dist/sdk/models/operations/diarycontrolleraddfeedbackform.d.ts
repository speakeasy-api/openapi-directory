import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerAddFeedbackFormRequest extends SpeakeasyBase {
    /**
     * Feedback submission model
     */
    feedbackSubmissionModel: shared.FeedbackSubmissionModel;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerAddFeedbackFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackForm200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackForm200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackForm200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackForm200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
