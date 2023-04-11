import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdUnpinSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdUnpinRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdUnpinResponse extends SpeakeasyBase {
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
