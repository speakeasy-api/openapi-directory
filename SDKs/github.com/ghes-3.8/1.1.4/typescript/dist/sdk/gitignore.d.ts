import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * View gitignore templates
 */
export declare class Gitignore {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all gitignore templates
     *
     * @remarks
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.8/rest/reference/repos#create-a-repository-for-the-authenticated-user).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/gitignore#get-all-gitignore-templates} - API method documentation
     */
    gitignoreGetAllTemplates(config?: AxiosRequestConfig): Promise<operations.GitignoreGetAllTemplatesResponse>;
    /**
     * Get a gitignore template
     *
     * @remarks
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) to get the raw contents.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/gitignore#get-a-gitignore-template} - API method documentation
     */
    gitignoreGetTemplate(req: operations.GitignoreGetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GitignoreGetTemplateResponse>;
}
