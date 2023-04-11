import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
 */
export declare enum ReposCreatePagesSiteRequestBody2BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
 */
export declare enum ReposCreatePagesSiteRequestBody2SourcePathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBody2Source extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
     */
    path?: ReposCreatePagesSiteRequestBody2SourcePathEnum;
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBody2 extends SpeakeasyBase {
    /**
     * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
     */
    buildType: ReposCreatePagesSiteRequestBody2BuildTypeEnum;
    /**
     * The source branch and directory used to publish your Pages site.
     */
    source?: ReposCreatePagesSiteRequestBody2Source;
}
/**
 * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
 */
export declare enum ReposCreatePagesSiteRequestBody1BuildTypeEnum {
    Legacy = "legacy",
    Workflow = "workflow"
}
/**
 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
 */
export declare enum ReposCreatePagesSiteRequestBody1SourcePathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBody1Source extends SpeakeasyBase {
    /**
     * The repository branch used to publish your site's source files.
     */
    branch: string;
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
     */
    path?: ReposCreatePagesSiteRequestBody1SourcePathEnum;
}
/**
 * The source branch and directory used to publish your Pages site.
 */
export declare class ReposCreatePagesSiteRequestBody1 extends SpeakeasyBase {
    /**
     * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
     */
    buildType?: ReposCreatePagesSiteRequestBody1BuildTypeEnum;
    /**
     * The source branch and directory used to publish your Pages site.
     */
    source: ReposCreatePagesSiteRequestBody1Source;
}
export declare class ReposCreatePagesSiteRequest extends SpeakeasyBase {
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
export declare class ReposCreatePagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Conflict
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    page?: shared.Page;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
