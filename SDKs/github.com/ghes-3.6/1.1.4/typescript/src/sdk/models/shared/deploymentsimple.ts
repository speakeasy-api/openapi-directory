/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A deployment created as the result of an Actions check run from a workflow that references an environment
 */
export class DeploymentSimple extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * Name for the target deployment environment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment: string;

  /**
   * Unique identifier of the deployment
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "original_environment" })
  originalEnvironment?: string;

  /**
   * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "performed_via_github_app" })
  @Type(() => NullableIntegration)
  performedViaGithubApp?: NullableIntegration;

  /**
   * Specifies if the given environment is one that end-users directly interact with. Default: false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "production_environment" })
  productionEnvironment?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "repository_url" })
  repositoryUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statuses_url" })
  statusesUrl: string;

  /**
   * Parameter to specify a task to execute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "task" })
  task: string;

  /**
   * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transient_environment" })
  transientEnvironment?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}
