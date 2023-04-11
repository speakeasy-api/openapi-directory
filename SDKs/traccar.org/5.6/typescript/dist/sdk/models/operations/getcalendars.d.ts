import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCalendarsRequest extends SpeakeasyBase {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;
    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
}
export declare class GetCalendarsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    calendars?: shared.Calendar[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
