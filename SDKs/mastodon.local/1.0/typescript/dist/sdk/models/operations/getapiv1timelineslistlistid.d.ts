import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1TimelinesListListIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1TimelinesListListIdRequest extends SpeakeasyBase {
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
    /**
     * Local ID of the list in the database.
     */
    listId: string;
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
export declare class GetApiV1TimelinesListListIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Statuses in this list will be returned..
     */
    statuses?: shared.Status[];
}
