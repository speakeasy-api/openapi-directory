import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1ScheduledStatusesIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1ScheduledStatusesIdRequest extends SpeakeasyBase {
    /**
     * ID of the scheduled status in the database.
     */
    id: string;
}
export declare class DeleteApiV1ScheduledStatusesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success.
     */
    deleteApiV1ScheduledStatusesId200ApplicationJSONObject?: Record<string, any>;
}
