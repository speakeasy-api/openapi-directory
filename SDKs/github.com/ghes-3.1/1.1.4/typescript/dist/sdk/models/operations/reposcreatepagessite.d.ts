import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
