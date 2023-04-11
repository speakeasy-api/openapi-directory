import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpsertSnippetSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpsertSnippetRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    upsertSnippetRequest: shared.UpsertSnippetRequest;
    /**
     * The ID of the site where you want to add or update the snippet.
     */
    siteId: string;
}
export declare class UpsertSnippetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    upsertSnippetResponse?: shared.UpsertSnippetResponse;
}
