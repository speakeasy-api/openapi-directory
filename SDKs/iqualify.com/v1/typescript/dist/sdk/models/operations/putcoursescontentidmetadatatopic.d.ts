import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCoursesContentIdMetadataTopicRequestBody extends SpeakeasyBase {
    topic?: string;
}
export declare class PutCoursesContentIdMetadataTopicRequest extends SpeakeasyBase {
    requestBody: PutCoursesContentIdMetadataTopicRequestBody;
    /**
     * The content Id
     */
    contentId: string;
}
export declare class PutCoursesContentIdMetadataTopicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Course detail
     */
    courseMetaResponse?: shared.CourseMetaResponse;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
