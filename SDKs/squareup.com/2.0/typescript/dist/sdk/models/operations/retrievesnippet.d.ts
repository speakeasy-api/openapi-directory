import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSnippetSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveSnippetRequest extends SpeakeasyBase {
    /**
     * The ID of the site that contains the snippet.
     */
    siteId: string;
}
export declare class RetrieveSnippetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveSnippetResponse?: shared.RetrieveSnippetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
