import { AxiosInstance } from "axios";
import { ApiSpecification } from "./apispecification";
import { Categories } from "./categories";
import { Changelog } from "./changelog";
import { CustomPages } from "./custompages";
import { Docs } from "./docs";
import { Errors } from "./errors";
import { Projects } from "./projects";
import { Swagger } from "./swagger";
import { Version } from "./version";
export declare const ServerList: readonly ["https://dash.readme.io/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apiSpecification: ApiSpecification;
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
    constructor(props: SDKProps);
}
