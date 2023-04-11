import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1StatusesIdRebloggedByRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class GetApiV1StatusesIdRebloggedByResponse extends SpeakeasyBase {
    /**
     * Success
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Status does not exist, is deleted, or is private
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
