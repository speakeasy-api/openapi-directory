/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum {
  Legacy = "legacy",
  Workflow = "workflow",
}

/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * Update the source for the repository. Must include the branch name and path.
 */
export class ReposUpdateInformationAboutPagesSiteRequestBody5Source2 extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  /**
   * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum;
}

/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum {
  GhPages = "gh-pages",
  Master = "master",
  MasterDocs = "master /docs",
}

export class ReposUpdateInformationAboutPagesSiteRequestBody5 extends SpeakeasyBase {
  /**
   * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build_type" })
  buildType?: ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum;

  /**
   * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/github-ae@latest/articles/using-a-custom-domain-with-github-pages/)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cname" })
  cname?: string;

  /**
   * Specify whether HTTPS should be enforced for the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "https_enforced" })
  httpsEnforced: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: any;
}

/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum {
  Legacy = "legacy",
  Workflow = "workflow",
}

/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * Update the source for the repository. Must include the branch name and path.
 */
export class ReposUpdateInformationAboutPagesSiteRequestBody4Source2 extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  /**
   * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum;
}

/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum {
  GhPages = "gh-pages",
  Master = "master",
  MasterDocs = "master /docs",
}

export class ReposUpdateInformationAboutPagesSiteRequestBody4 extends SpeakeasyBase {
  /**
   * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build_type" })
  buildType?: ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum;

  /**
   * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/github-ae@latest/articles/using-a-custom-domain-with-github-pages/)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cname" })
  cname?: string;

  /**
   * Specify whether HTTPS should be enforced for the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "https_enforced" })
  httpsEnforced?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: any;
}

/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum {
  Legacy = "legacy",
  Workflow = "workflow",
}

/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * Update the source for the repository. Must include the branch name and path.
 */
export class ReposUpdateInformationAboutPagesSiteRequestBody3Source2 extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  /**
   * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum;
}

/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum {
  GhPages = "gh-pages",
  Master = "master",
  MasterDocs = "master /docs",
}

export class ReposUpdateInformationAboutPagesSiteRequestBody3 extends SpeakeasyBase {
  /**
   * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build_type" })
  buildType?: ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum;

  /**
   * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/github-ae@latest/articles/using-a-custom-domain-with-github-pages/)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cname" })
  cname: string;

  /**
   * Specify whether HTTPS should be enforced for the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "https_enforced" })
  httpsEnforced?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: any;
}

/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum {
  Legacy = "legacy",
  Workflow = "workflow",
}

/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * Update the source for the repository. Must include the branch name and path.
 */
export class ReposUpdateInformationAboutPagesSiteRequestBody2Source2 extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  /**
   * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum;
}

/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum {
  GhPages = "gh-pages",
  Master = "master",
  MasterDocs = "master /docs",
}

export class ReposUpdateInformationAboutPagesSiteRequestBody2 extends SpeakeasyBase {
  /**
   * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build_type" })
  buildType?: ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum;

  /**
   * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/github-ae@latest/articles/using-a-custom-domain-with-github-pages/)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cname" })
  cname?: string;

  /**
   * Specify whether HTTPS should be enforced for the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "https_enforced" })
  httpsEnforced?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: any;
}

/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum {
  Legacy = "legacy",
  Workflow = "workflow",
}

/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * Update the source for the repository. Must include the branch name and path.
 */
export class ReposUpdateInformationAboutPagesSiteRequestBody1Source2 extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  /**
   * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum;
}

/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export enum ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum {
  GhPages = "gh-pages",
  Master = "master",
  MasterDocs = "master /docs",
}

export class ReposUpdateInformationAboutPagesSiteRequestBody1 extends SpeakeasyBase {
  /**
   * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build_type" })
  buildType: ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum;

  /**
   * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/github-ae@latest/articles/using-a-custom-domain-with-github-pages/)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cname" })
  cname?: string;

  /**
   * Specify whether HTTPS should be enforced for the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "https_enforced" })
  httpsEnforced?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: any;
}

export class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: any;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
