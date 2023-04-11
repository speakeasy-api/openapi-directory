import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdMuteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdMuteRequestBody extends SpeakeasyBase {
    /**
     * How long the mute should last, in seconds. Defaults to 0 (indefinite).
     */
    duration?: number;
    /**
     * Mute notifications in addition to statuses? Defaults to true.
     */
    notifications?: boolean;
}
export declare class PostApiV1AccountsIdMuteRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdMuteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Successfully muted, or account was already muted. Note that you can call this API method again with notifications=false to update the relationship so that only statuses are muted.
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
