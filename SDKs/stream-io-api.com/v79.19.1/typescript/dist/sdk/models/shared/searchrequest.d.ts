import { SpeakeasyBase } from "../../../internal/utils";
import { SortParam } from "./sortparam";
export declare class SearchRequest extends SpeakeasyBase {
    /**
     * Channel filter conditions
     */
    filterConditions: Record<string, any>;
    /**
     * Number of messages to return
     */
    limit?: number;
    /**
     * Message filter conditions
     */
    messageFilterConditions?: Record<string, any>;
    /**
     * Pagination parameter. Cannot be used with non-zero offset.
     */
    next?: string;
    /**
     * Pagination offset. Cannot be used with sort or next.
     */
    offset?: number;
    /**
     * Search phrase
     */
    query?: string;
    /**
     * Sort parameters. Cannot be used with non-zero offset
     */
    sort?: SortParam[];
}
