import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
export declare class ResourceAllocationInputModel extends SpeakeasyBase {
    endDate?: Date;
    endTime?: number;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
