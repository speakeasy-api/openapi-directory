import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdUnbookmarkSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdUnbookmarkRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdUnbookmarkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status unbookmarked
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
