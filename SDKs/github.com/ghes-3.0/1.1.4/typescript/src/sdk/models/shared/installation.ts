/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppPermissions } from "./apppermissions";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Describe whether all repositories have been selected or there's a selection involved
 */
export enum InstallationRepositorySelectionEnum {
  All = "all",
  Selected = "selected",
}

/**
 * Installation
 */
export class Installation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_tokens_url" })
  accessTokensUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "account" })
  account: any;

  @SpeakeasyMetadata()
  @Expose({ name: "app_id" })
  appId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "app_slug" })
  appSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "has_multiple_single_files" })
  hasMultipleSingleFiles?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl: string;

  /**
   * The ID of the installation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * The permissions granted to the user-to-server access token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "permissions" })
  @Type(() => AppPermissions)
  permissions: AppPermissions;

  @SpeakeasyMetadata()
  @Expose({ name: "repositories_url" })
  repositoriesUrl: string;

  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  @SpeakeasyMetadata()
  @Expose({ name: "repository_selection" })
  repositorySelection: InstallationRepositorySelectionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "single_file_name" })
  singleFileName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "single_file_paths" })
  singleFilePaths?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "suspended_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  suspendedAt: Date;

  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "suspended_by" })
  @Type(() => NullableSimpleUser)
  suspendedBy: NullableSimpleUser;

  /**
   * The ID of the user or organization this token is being scoped to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target_id" })
  targetId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "target_type" })
  targetType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}
