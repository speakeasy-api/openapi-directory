import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
/**
 * Resource allocation update model
 */
export declare class ResourceAllocationUpdateModel extends SpeakeasyBase {
    endDate?: Date;
    endTime?: number;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
