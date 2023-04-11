import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1StatusesIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1StatusesIdRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class DeleteApiV1StatusesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
