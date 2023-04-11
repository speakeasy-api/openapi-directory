import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectStringsForLanguageRequest extends SpeakeasyBase {
    /**
     * Target language code
     */
    language: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetProjectStringsForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for strings and their translations
     */
    stringList?: shared.StringList;
}
