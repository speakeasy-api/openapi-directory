import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCourseMappingsExternalcourseExternalCourseIdRequest extends SpeakeasyBase {
    /**
     * external course's id
     */
    externalCourseId: string;
}
export declare class GetCourseMappingsExternalcourseExternalCourseIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Course Mapping
     */
    getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings?: string[];
}
