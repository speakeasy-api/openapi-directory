import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCoursesContentIdMetadataLevelRequestBody extends SpeakeasyBase {
    level?: string;
}
export declare class PutCoursesContentIdMetadataLevelRequest extends SpeakeasyBase {
    requestBody: PutCoursesContentIdMetadataLevelRequestBody;
    /**
     * The content Id
     */
    contentId: string;
}
export declare class PutCoursesContentIdMetadataLevelResponse extends SpeakeasyBase {
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
