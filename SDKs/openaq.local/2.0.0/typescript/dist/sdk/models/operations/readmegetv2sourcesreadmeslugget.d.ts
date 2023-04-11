import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReadmeGetV2SourcesReadmeSlugGetRequest extends SpeakeasyBase {
    slug: string;
}
export declare class ReadmeGetV2SourcesReadmeSlugGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny?: any;
}
