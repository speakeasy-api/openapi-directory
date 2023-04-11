import { SpeakeasyBase } from "../../../internal/utils";
import { SortParamRequest } from "./sortparamrequest";
/**
 * Query Channels Request
 */
export declare class QueryChannelsRequest extends SpeakeasyBase {
    clientId?: string;
    connectionId?: string;
    filterConditions?: Record<string, any>;
    /**
     * Number of channels to limit
     */
    limit?: number;
    /**
     * Number of members to limit
     */
    memberLimit?: number;
    /**
     * Number of messages to limit
     */
    messageLimit?: number;
    /**
     * Channel pagination offset
     */
    offset?: number;
    presence?: boolean;
    /**
     * List of sort parameters
     */
    sort: SortParamRequest[];
    /**
     * Whether to update channel state or not
     */
    state?: boolean;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
    /**
     * Whether to start watching found channels or not
     */
    watch?: boolean;
}
