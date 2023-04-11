import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdListsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdListsRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1AccountsIdListsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    lists?: shared.List[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
