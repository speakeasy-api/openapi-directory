import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1StatusesIdContextSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1StatusesIdContextRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class GetApiV1StatusesIdContextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    context?: shared.Context;
    /**
     * Status does not exist, is deleted, or is private
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
