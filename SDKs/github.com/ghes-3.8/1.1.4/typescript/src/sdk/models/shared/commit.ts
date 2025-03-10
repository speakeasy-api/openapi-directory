/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DiffEntry } from "./diffentry";
import { NullableGitUser } from "./nullablegituser";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Verification } from "./verification";
import { Expose, Type } from "class-transformer";

export class CommitCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

export class CommitCommit extends SpeakeasyBase {
  /**
   * Metaproperties for Git author/committer information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  @Type(() => NullableGitUser)
  author: NullableGitUser;

  @SpeakeasyMetadata()
  @Expose({ name: "comment_count" })
  commentCount: number;

  /**
   * Metaproperties for Git author/committer information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "committer" })
  @Type(() => NullableGitUser)
  committer: NullableGitUser;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tree" })
  @Type(() => CommitCommitTree)
  tree: CommitCommitTree;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verification" })
  @Type(() => Verification)
  verification?: Verification;
}

export class CommitParents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

export class CommitStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additions" })
  additions?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deletions" })
  deletions?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}

/**
 * Commit
 */
export class Commit extends SpeakeasyBase {
  /**
   * A GitHub user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  @Type(() => NullableSimpleUser)
  author: NullableSimpleUser;

  @SpeakeasyMetadata()
  @Expose({ name: "comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => CommitCommit)
  commit: CommitCommit;

  /**
   * A GitHub user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "committer" })
  @Type(() => NullableSimpleUser)
  committer: NullableSimpleUser;

  @SpeakeasyMetadata({ elemType: DiffEntry })
  @Expose({ name: "files" })
  @Type(() => DiffEntry)
  files?: DiffEntry[];

  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ elemType: CommitParents })
  @Expose({ name: "parents" })
  @Type(() => CommitParents)
  parents: CommitParents[];

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stats" })
  @Type(() => CommitStats)
  stats?: CommitStats;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}
