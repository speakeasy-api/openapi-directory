import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCoursesContentIdMetadataCategoryRequestBody extends SpeakeasyBase {
    category?: string;
}
export declare class PutCoursesContentIdMetadataCategoryRequest extends SpeakeasyBase {
    requestBody: PutCoursesContentIdMetadataCategoryRequestBody;
    /**
     * The content Id
     */
    contentId: string;
}
export declare class PutCoursesContentIdMetadataCategoryResponse extends SpeakeasyBase {
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
