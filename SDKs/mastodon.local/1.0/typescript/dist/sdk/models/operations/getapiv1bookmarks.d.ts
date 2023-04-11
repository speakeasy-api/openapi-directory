import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1BookmarksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1BookmarksRequest extends SpeakeasyBase {
    limit?: number;
    maxId?: string;
    minId?: string;
    sinceId?: string;
}
export declare class GetApiV1BookmarksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    statuses?: shared.Status[];
}
