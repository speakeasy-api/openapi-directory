import { SpeakeasyBase } from "../../../internal/utils";
import { WeekDayInputModel } from "./weekdayinputmodel";
/**
 * Resource Availability Input Model
 */
export declare class AvailabilityInputModel extends SpeakeasyBase {
    fri?: WeekDayInputModel;
    mon?: WeekDayInputModel;
    sat?: WeekDayInputModel;
    sun?: WeekDayInputModel;
    thu?: WeekDayInputModel;
    tue?: WeekDayInputModel;
    wed?: WeekDayInputModel;
}
