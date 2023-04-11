import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleViewModel } from "./scheduleviewmodel";
/**
 * Success
 */
export declare class ScheduleListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ScheduleViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
