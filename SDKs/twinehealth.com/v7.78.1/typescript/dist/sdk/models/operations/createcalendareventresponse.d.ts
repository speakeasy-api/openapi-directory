import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCalendarEventResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createCalendarEventResponseRequest?: shared.CreateCalendarEventResponseRequest;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
