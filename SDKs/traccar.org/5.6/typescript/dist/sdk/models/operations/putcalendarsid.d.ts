import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCalendarsIdRequest extends SpeakeasyBase {
    calendar: shared.Calendar;
    id: number;
}
export declare class PutCalendarsIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
