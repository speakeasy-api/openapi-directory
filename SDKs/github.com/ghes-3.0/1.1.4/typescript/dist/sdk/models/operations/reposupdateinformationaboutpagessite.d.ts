import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
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
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    source?: any;
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
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public: boolean;
    source?: any;
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
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    source?: any;
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
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
     */
    cname?: string;
    /**
     * Specify whether HTTPS should be enforced for the repository.
     */
    httpsEnforced?: boolean;
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     */
    public?: boolean;
    source: any;
}
export declare class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
    requestBody: any;
    owner: string;
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
