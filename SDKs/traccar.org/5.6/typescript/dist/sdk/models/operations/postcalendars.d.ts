import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCalendarsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
