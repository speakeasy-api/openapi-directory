import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
/**
 * Resource Block input model
 */
export declare class CalendarBlockUpdateModel extends SpeakeasyBase {
    endDate?: Date;
    endTime?: number;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
