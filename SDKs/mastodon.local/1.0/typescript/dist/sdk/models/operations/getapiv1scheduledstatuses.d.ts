import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ScheduledStatusesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1ScheduledStatusesRequest extends SpeakeasyBase {
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
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
export declare class GetApiV1ScheduledStatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Get scheduled statuses.
     */
    scheduledStatuses?: shared.ScheduledStatus[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
