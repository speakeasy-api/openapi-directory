import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectTranslationsForLanguageRequest extends SpeakeasyBase {
    /**
     * Target language code
     */
    language: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetProjectTranslationsForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for strings and their translations
     */
    stringList?: shared.StringList;
}
