import { SpeakeasyBase } from "../../../internal/utils";
import { SortParam } from "./sortparam";
export declare class QueryUsersRequest extends SpeakeasyBase {
    clientId?: string;
    connectionId?: string;
    /**
     * User filters
     */
    filterConditions: Record<string, any>;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    limit?: number;
    offset?: number;
    /**
     * Request user presence status
     */
    presence?: boolean;
    /**
     * Array of sort parameters
     */
    sort: SortParam[];
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
