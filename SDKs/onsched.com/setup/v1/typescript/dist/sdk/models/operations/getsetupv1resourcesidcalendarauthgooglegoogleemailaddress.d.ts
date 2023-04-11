import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest extends SpeakeasyBase {
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * Email address of Google Calendar
     */
    googleEmailAddress: string;
    /**
     * id of resource object
     */
    id: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calendarAuthViewModel?: shared.CalendarAuthViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
