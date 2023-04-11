import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class GistCommitChangeStatus extends SpeakeasyBase {
    additions?: number;
    deletions?: number;
    total?: number;
}
/**
 * Gist Commit
 */
export declare class GistCommit extends SpeakeasyBase {
    changeStatus: GistCommitChangeStatus;
    committedAt: Date;
    url: string;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
    version: string;
}
