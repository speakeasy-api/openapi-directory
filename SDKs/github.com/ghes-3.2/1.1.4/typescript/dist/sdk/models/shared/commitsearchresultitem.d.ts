import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { NullableGitUser } from "./nullablegituser";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SearchResultTextMatches } from "./searchresulttextmatches";
import { Verification } from "./verification";
export declare class CommitSearchResultItemCommitAuthor extends SpeakeasyBase {
    date: Date;
    email: string;
    name: string;
}
export declare class CommitSearchResultItemCommitTree extends SpeakeasyBase {
    sha: string;
    url: string;
}
export declare class CommitSearchResultItemCommit extends SpeakeasyBase {
    author: CommitSearchResultItemCommitAuthor;
    commentCount: number;
    /**
     * Metaproperties for Git author/committer information.
     */
    committer: NullableGitUser;
    message: string;
    tree: CommitSearchResultItemCommitTree;
    url: string;
    verification?: Verification;
}
export declare class CommitSearchResultItemParents extends SpeakeasyBase {
    htmlUrl?: string;
    sha?: string;
    url?: string;
}
/**
 * Commit Search Result Item
 */
export declare class CommitSearchResultItem extends SpeakeasyBase {
    /**
     * Simple User
     */
    author: NullableSimpleUser;
    commentsUrl: string;
    commit: CommitSearchResultItemCommit;
    /**
     * Metaproperties for Git author/committer information.
     */
    committer: NullableGitUser;
    htmlUrl: string;
    nodeId: string;
    parents: CommitSearchResultItemParents[];
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    score: number;
    sha: string;
    textMatches?: SearchResultTextMatches[];
    url: string;
}
