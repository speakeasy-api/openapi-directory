import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarEventResource } from "./calendareventresource";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchCalendarEventResponse extends SpeakeasyBase {
    data?: CalendarEventResource;
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [patient](#operation/fetchPatient)
     *
     */
    included?: Resource[];
    meta?: FetchMetaResponse;
}
