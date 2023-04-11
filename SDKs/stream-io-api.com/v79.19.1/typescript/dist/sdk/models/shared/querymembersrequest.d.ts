import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelMember } from "./channelmember";
import { SortParam } from "./sortparam";
export declare class QueryMembersRequest extends SpeakeasyBase {
    createdAtAfter?: Date;
    createdAtAfterOrEqual?: Date;
    createdAtBefore?: Date;
    createdAtBeforeOrEqual?: Date;
    /**
     * Filter to apply to members
     */
    filterConditions: Record<string, any>;
    /**
     * Channel ID to interact with
     */
    id?: string;
    /**
     * Number of records to return
     */
    limit?: number;
    /**
     * List of members to search in distinct channels
     */
    members?: ChannelMember[];
    /**
     * Number of records to offset
     */
    offset?: number;
    /**
     * Array of sort parameters
     */
    sort?: SortParam[];
    /**
     * Channel type to interact with
     */
    type: string;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
    userIdGt?: string;
    userIdGte?: string;
    userIdLt?: string;
    userIdLte?: string;
}
