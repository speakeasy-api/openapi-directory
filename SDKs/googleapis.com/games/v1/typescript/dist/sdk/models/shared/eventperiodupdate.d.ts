import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodRange } from "./eventperiodrange";
import { EventUpdateRequest } from "./eventupdaterequest";
/**
 * An event period update resource.
 */
export declare class EventPeriodUpdate extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`.
     */
    kind?: string;
    /**
     * An event period time range.
     */
    timePeriod?: EventPeriodRange;
    /**
     * The updates being made for this time period.
     */
    updates?: EventUpdateRequest[];
}
