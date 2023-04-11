import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
/**
 * Service allocation update model
 */
export declare class ServiceAllocationUpdateModel extends SpeakeasyBase {
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
