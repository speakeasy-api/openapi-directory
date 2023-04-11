import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifying information for the git-user
 */
export declare class TimelineCommittedEventAuthor extends SpeakeasyBase {
    /**
     * Timestamp of the commit
     */
    date: Date;
    /**
     * Git email address of the user
     */
    email: string;
    /**
     * Name of the git user
     */
    name: string;
}
/**
 * Identifying information for the git-user
 */
export declare class TimelineCommittedEventCommitter extends SpeakeasyBase {
    /**
     * Timestamp of the commit
     */
    date: Date;
    /**
     * Git email address of the user
     */
    email: string;
    /**
     * Name of the git user
     */
    name: string;
}
export declare class TimelineCommittedEventParents extends SpeakeasyBase {
    htmlUrl: string;
    /**
     * SHA for the commit
     */
    sha: string;
    url: string;
}
export declare class TimelineCommittedEventTree extends SpeakeasyBase {
    /**
     * SHA for the commit
     */
    sha: string;
    url: string;
}
export declare class TimelineCommittedEventVerification extends SpeakeasyBase {
    payload: string;
    reason: string;
    signature: string;
    verified: boolean;
}
/**
 * Timeline Committed Event
 */
export declare class TimelineCommittedEvent extends SpeakeasyBase {
    /**
     * Identifying information for the git-user
     */
    author: TimelineCommittedEventAuthor;
    /**
     * Identifying information for the git-user
     */
    committer: TimelineCommittedEventCommitter;
    event?: string;
    htmlUrl: string;
    /**
     * Message describing the purpose of the commit
     */
    message: string;
    nodeId: string;
    parents: TimelineCommittedEventParents[];
    /**
     * SHA for the commit
     */
    sha: string;
    tree: TimelineCommittedEventTree;
    url: string;
    verification: TimelineCommittedEventVerification;
}
