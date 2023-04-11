import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSnippetSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteSnippetRequest extends SpeakeasyBase {
    /**
     * The ID of the site that contains the snippet.
     */
    siteId: string;
}
export declare class DeleteSnippetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSnippetResponse?: shared.DeleteSnippetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
