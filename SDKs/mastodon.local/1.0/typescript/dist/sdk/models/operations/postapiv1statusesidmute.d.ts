import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdMuteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdMuteRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdMuteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status's conversation muted, or was already muted
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
