import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarBlockViewModel } from "./calendarblockviewmodel";
/**
 * Valid response
 */
export declare class CalendarBlockListViewModel extends SpeakeasyBase {
    count?: number;
    data?: CalendarBlockViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
