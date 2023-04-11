import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSurveyRequest extends SpeakeasyBase {
    /**
     * ID of survey (eg. SV_123)
     */
    surveyId: string;
}
export declare class GetSurveyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Survey data
     */
    surveyResponse?: Record<string, any>;
}
