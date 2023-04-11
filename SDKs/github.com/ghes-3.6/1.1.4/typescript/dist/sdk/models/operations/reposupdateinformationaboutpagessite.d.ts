import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare class ReposUpdateInformationAboutPagesSiteRequestBody5Source2 extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    path: ReposUpdateInformationAboutPagesSiteRequestBody5Source2PathEnum;
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody5Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody5 extends SpeakeasyBase {
    /**
     * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
     */
    buildType?: ReposUpdateInformationAboutPagesSiteRequestBody5BuildTypeEnum;
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/enterprise-server@3.6/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced: boolean;
    source?: any;
}
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare class ReposUpdateInformationAboutPagesSiteRequestBody4Source2 extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    path: ReposUpdateInformationAboutPagesSiteRequestBody4Source2PathEnum;
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody4Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody4 extends SpeakeasyBase {
    /**
     * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
     */
    buildType?: ReposUpdateInformationAboutPagesSiteRequestBody4BuildTypeEnum;
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/enterprise-server@3.6/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    source?: any;
}
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare class ReposUpdateInformationAboutPagesSiteRequestBody3Source2 extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    path: ReposUpdateInformationAboutPagesSiteRequestBody3Source2PathEnum;
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody3Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody3 extends SpeakeasyBase {
    /**
     * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
     */
    buildType?: ReposUpdateInformationAboutPagesSiteRequestBody3BuildTypeEnum;
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/enterprise-server@3.6/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    source?: any;
}
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare class ReposUpdateInformationAboutPagesSiteRequestBody2Source2 extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    path: ReposUpdateInformationAboutPagesSiteRequestBody2Source2PathEnum;
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody2Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody2 extends SpeakeasyBase {
    /**
     * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
     */
    buildType?: ReposUpdateInformationAboutPagesSiteRequestBody2BuildTypeEnum;
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/enterprise-server@3.6/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    source: any;
}
/**
 * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * Update the source for the repository. Must include the branch name and path.
 */
export declare class ReposUpdateInformationAboutPagesSiteRequestBody1Source2 extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    path: ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum;
}
/**
 * Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 */
export declare enum ReposUpdateInformationAboutPagesSiteRequestBody1Source1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}
export declare class ReposUpdateInformationAboutPagesSiteRequestBody1 extends SpeakeasyBase {
    /**
     * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
     */
    buildType: ReposUpdateInformationAboutPagesSiteRequestBody1BuildTypeEnum;
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/enterprise-server@3.6/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    source?: any;
}
export declare class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
