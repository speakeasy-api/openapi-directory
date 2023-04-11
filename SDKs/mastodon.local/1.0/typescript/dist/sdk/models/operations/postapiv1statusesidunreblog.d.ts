import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdUnreblogSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdUnreblogRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdUnreblogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status no longer reblogged
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
