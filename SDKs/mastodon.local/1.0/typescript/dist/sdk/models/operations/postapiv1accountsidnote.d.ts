import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdNoteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdNoteRequestBody extends SpeakeasyBase {
    /**
     * The comment to be set on that user. Provide an empty string or leave out this parameter to clear the currently set note.
     */
    comment?: string;
}
export declare class PostApiV1AccountsIdNoteRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdNoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Successfully unmuted, or account was already unmuted.
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
