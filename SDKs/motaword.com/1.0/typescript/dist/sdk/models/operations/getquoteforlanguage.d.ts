import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteForLanguageRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
    /**
     * Target language that you want to complete
     */
    targetLanguage: string;
}
export declare class GetQuoteForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall FileWasAlreadyUploaded
     */
    error?: shared.ErrorT;
    /**
     * Newly created project(s)
     */
    projectList?: shared.ProjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
