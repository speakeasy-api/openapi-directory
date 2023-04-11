import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApiV1ScheduledStatusesIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PutApiV1ScheduledStatusesIdRequestBody extends SpeakeasyBase {
    /**
     * ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future.
     */
    scheduledAt?: Date;
}
export declare class PutApiV1ScheduledStatusesIdRequest extends SpeakeasyBase {
    requestBody?: PutApiV1ScheduledStatusesIdRequestBody;
    /**
     * ID of the scheduled status in the database.
     */
    id: string;
}
export declare class PutApiV1ScheduledStatusesIdResponse extends SpeakeasyBase {
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
