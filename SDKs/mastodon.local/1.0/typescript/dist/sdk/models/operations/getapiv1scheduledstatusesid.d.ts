import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ScheduledStatusesIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1ScheduledStatusesIdRequest extends SpeakeasyBase {
    /**
     * ID of the scheduled status in the database.
     */
    id: string;
}
export declare class GetApiV1ScheduledStatusesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success.
     */
    scheduledStatus?: shared.ScheduledStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
