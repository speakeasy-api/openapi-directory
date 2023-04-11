import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCoursesContentIdMetadataTagsRequestBody extends SpeakeasyBase {
    tags?: string[];
}
export declare class PutCoursesContentIdMetadataTagsRequest extends SpeakeasyBase {
    requestBody: PutCoursesContentIdMetadataTagsRequestBody;
    /**
     * The content Id
     */
    contentId: string;
}
export declare class PutCoursesContentIdMetadataTagsResponse extends SpeakeasyBase {
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
