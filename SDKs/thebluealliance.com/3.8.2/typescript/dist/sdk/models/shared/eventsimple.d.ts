import { SpeakeasyBase } from "../../../internal/utils";
import { DistrictList } from "./districtlist";
/**
 * Successful response
 */
export declare class EventSimple extends SpeakeasyBase {
    /**
     * City, town, village, etc. the event is located in.
     */
    city?: string;
    /**
     * Country the event is located in.
     */
    country?: string;
    district?: DistrictList;
    /**
     * Event end date in `yyyy-mm-dd` format.
     */
    endDate: Date;
    /**
     * Event short code, as provided by FIRST.
     */
    eventCode: string;
    /**
     * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
     */
    eventType: number;
    /**
     * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
     */
    key: string;
    /**
     * Official name of event on record either provided by FIRST or organizers of offseason event.
     */
    name: string;
    /**
     * Event start date in `yyyy-mm-dd` format.
     */
    startDate: Date;
    /**
     * State or Province the event is located in.
     */
    stateProv?: string;
    /**
     * Year the event data is for.
     */
    year: number;
}
