import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest extends SpeakeasyBase {
    /**
     * id of resource object
     */
    id: string;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
    /**
     * Email address of Outlook Calendar
     */
    outlookEmailAddress: string;
}
export declare class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calendarAuthViewModel?: shared.CalendarAuthViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
