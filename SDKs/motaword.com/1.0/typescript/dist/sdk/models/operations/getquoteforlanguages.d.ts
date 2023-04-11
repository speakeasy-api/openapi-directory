import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteForLanguagesRequest extends SpeakeasyBase {
    getQuotesForLanguagesBody?: shared.GetQuotesForLanguagesBody;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class GetQuoteForLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall FileWasAlreadyUploaded
     */
    error?: shared.ErrorT;
    /**
     * Newly created project
     */
    projectList?: shared.ProjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
