/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class ArtifactWorkflowRun extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "head_branch" })
  headBranch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "head_repository_id" })
  headRepositoryId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "head_sha" })
  headSha?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "repository_id" })
  repositoryId?: number;
}

/**
 * An artifact
 */
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "archive_download_url" })
  archiveDownloadUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * Whether or not the artifact has expired.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expired" })
  expired: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "expires_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiresAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * The name of the artifact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  /**
   * The size in bytes of the artifact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "size_in_bytes" })
  sizeInBytes: number;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow_run" })
  @Type(() => ArtifactWorkflowRun)
  workflowRun?: ArtifactWorkflowRun;
}
