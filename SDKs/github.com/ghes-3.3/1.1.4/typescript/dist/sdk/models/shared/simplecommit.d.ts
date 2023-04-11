import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimpleCommitAuthor extends SpeakeasyBase {
    email: string;
    name: string;
}
export declare class SimpleCommitCommitter extends SpeakeasyBase {
    email: string;
    name: string;
}
/**
 * A commit.
 */
export declare class SimpleCommit extends SpeakeasyBase {
    author: SimpleCommitAuthor;
    committer: SimpleCommitCommitter;
    id: string;
    message: string;
    timestamp: Date;
    treeId: string;
}
