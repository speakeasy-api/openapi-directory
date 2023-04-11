import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DiaryControllerAddFeedbackRawRequest extends SpeakeasyBase {
    /**
     * Feedback submission model
     */
    requestBody: Uint8Array;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerAddFeedbackRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackRaw200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackRaw200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackRaw200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerAddFeedbackRaw200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
