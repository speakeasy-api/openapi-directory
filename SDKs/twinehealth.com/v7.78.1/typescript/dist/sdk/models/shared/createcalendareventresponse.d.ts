import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarEventResource } from "./calendareventresource";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
/**
 * OK
 */
export declare class CreateCalendarEventResponse extends SpeakeasyBase {
    data?: CalendarEventResource;
    meta?: CreateOrUpdateMetaResponse;
}
