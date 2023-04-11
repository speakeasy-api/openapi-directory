import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCourseMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Course Mappings
     */
    courseMappings?: Record<string, string>;
}
