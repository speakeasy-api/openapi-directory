import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdStatusesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdStatusesRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1AccountsIdStatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Instance is in whitelist mode or running a version of Mastodon older than 2.7.0, and the Authorization header is invalid or missing
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Statuses posted to the given account. Public (for public statuses only), or user token + read:statuses (for private statuses the user is authorized to see)
     */
    statuses?: shared.Status[];
}
