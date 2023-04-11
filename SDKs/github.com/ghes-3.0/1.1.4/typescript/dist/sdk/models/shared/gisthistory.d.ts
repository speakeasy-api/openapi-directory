import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class GistHistoryChangeStatus extends SpeakeasyBase {
    additions?: number;
    deletions?: number;
    total?: number;
}
/**
 * Gist History
 */
export declare class GistHistory extends SpeakeasyBase {
    changeStatus?: GistHistoryChangeStatus;
    committedAt?: Date;
    url?: string;
    /**
     * Simple User
     */
    user?: NullableSimpleUser;
    version?: string;
}
