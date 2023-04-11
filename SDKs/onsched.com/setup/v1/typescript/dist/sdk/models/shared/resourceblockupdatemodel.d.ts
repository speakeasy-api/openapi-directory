import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
/**
 * Resource Block update model
 */
export declare class ResourceBlockUpdateModel extends SpeakeasyBase {
    allDay?: boolean;
    endDate?: Date;
    endTime?: number;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
