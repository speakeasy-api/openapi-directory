import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LanguageDetectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    languageDetectionResponse?: shared.LanguagePredicted[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation Error
     */
    validationErrors?: shared.ValidationErrors;
}
