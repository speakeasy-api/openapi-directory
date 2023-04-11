import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerAddFeedbackJsonRequest extends SpeakeasyBase {
    /**
     * Feedback submission model
     */
    feedbackSubmissionModel: shared.FeedbackSubmissionModel;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerAddFeedbackJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackJSON200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackJson200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackJSON200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackJson200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
