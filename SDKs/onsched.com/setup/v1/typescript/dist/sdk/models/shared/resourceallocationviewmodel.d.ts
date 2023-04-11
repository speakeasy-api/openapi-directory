import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
/**
 * Success
 */
export declare class ResourceAllocationViewModel extends SpeakeasyBase {
    businessId?: number;
    deletedStatus?: boolean;
    deletedTime?: string;
    endDate?: string;
    endTime?: number;
    id?: number;
    object?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    resourceId?: number;
    startDate?: string;
    startTime?: number;
}
