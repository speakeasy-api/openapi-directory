import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1TimelinesHomeSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1TimelinesHomeRequest extends SpeakeasyBase {
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
    /**
     * Show only local statuses? Defaults to false.
     */
    local?: boolean;
    /**
     * Return results older than ID
     */
    maxId?: string;
    /**
     * Return results immediately newer than ID
     */
    minId?: string;
    /**
     * Return results newer than ID
     */
    sinceId?: string;
}
export declare class GetApiV1TimelinesHomeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get statuses for home.
     */
    statuses?: shared.Status[];
}
