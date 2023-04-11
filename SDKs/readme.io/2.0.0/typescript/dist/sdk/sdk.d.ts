import { APISpecification } from "./apispecification";
import { Categories } from "./categories";
import { Changelog } from "./changelog";
import { CustomPages } from "./custompages";
import { Docs } from "./docs";
import { Errors } from "./errors";
import { Projects } from "./projects";
import { Swagger } from "./swagger";
import { Version } from "./version";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dash.readme.io/api/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Create beautiful product and API documentation with our developer friendly platform.
 */
export declare class SDK {
    apiSpecification: APISpecification;
    categories: Categories;
    changelog: Changelog;
    customPages: CustomPages;
    docs: Docs;
    errors: Errors;
    projects: Projects;
    swagger: Swagger;
    version: Version;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
