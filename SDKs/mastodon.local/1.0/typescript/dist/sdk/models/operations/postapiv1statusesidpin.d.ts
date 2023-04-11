import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdPinSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdPinRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdPinResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status pinned. Note the status is not a reblog and its authoring account is your own.
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
