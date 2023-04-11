import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
export declare class ServiceAllocationInputModel extends SpeakeasyBase {
    bookingLimit?: number;
    endDate?: Date;
    endTime?: number;
    locationId?: string;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    resourceId?: string;
    startDate?: Date;
    startTime?: number;
}
