import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdBlockSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdBlockRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Successfully blocked, or account was already blocked
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
