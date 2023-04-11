import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
/**
 * Success
 */
export declare class ServiceBlockViewModel extends SpeakeasyBase {
    deletedStatus?: boolean;
    deletedTime?: string;
    endDate?: string;
    endTime?: number;
    id?: string;
    locationId?: string;
    object?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    serviceId?: string;
    startDate?: string;
    startTime?: number;
}
