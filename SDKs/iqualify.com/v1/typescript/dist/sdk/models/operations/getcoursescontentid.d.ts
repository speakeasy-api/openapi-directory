import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoursesContentIdRequest extends SpeakeasyBase {
    /**
     * The content Id
     */
    contentId: string;
}
export declare class GetCoursesContentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Course detail
     */
    courseMetaResponse?: shared.CourseMetaResponse;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
