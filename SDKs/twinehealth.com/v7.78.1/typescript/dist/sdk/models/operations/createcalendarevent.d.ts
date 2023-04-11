import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCalendarEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createCalendarEventResponse?: shared.CreateCalendarEventResponse;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
