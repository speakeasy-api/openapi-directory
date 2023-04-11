import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoursesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * All courses (draft and published) in the organisation.
     */
    courseResponses?: shared.CourseResponse[];
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
