import { SpeakeasyBase } from "../../../internal/utils";
import { SortParam } from "./sortparam";
export declare class QueryBannedUsersRequest extends SpeakeasyBase {
    createdAtAfter?: Date;
    createdAtAfterOrEqual?: Date;
    createdAtBefore?: Date;
    createdAtBeforeOrEqual?: Date;
    filterConditions: Record<string, any>;
    limit?: number;
    offset?: number;
    sort?: SortParam[];
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    /**
     * **Server-side only**. User ID which server acts upon
     */
    userId?: string;
}
