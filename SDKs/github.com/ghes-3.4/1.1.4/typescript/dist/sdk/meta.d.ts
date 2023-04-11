import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints that give information about the API.
 */
export declare class Meta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get GitHub Enterprise Server meta information
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/reference/meta#get-github-meta-information} - API method documentation
     */
    metaGet(config?: AxiosRequestConfig): Promise<operations.MetaGetResponse>;
    /**
     * Get Octocat
     *
     * @remarks
     * Get the octocat as ASCII art
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/reference/meta#get-octocat} - API method documentation
     */
    metaGetOctocat(req: operations.MetaGetOctocatRequest, config?: AxiosRequestConfig): Promise<operations.MetaGetOctocatResponse>;
    /**
     * Get the Zen of GitHub
     *
     * @remarks
     * Get a random sentence from the Zen of GitHub
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/meta#get-the-zen-of-github} - API method documentation
     */
    metaGetZen(config?: AxiosRequestConfig): Promise<operations.MetaGetZenResponse>;
    /**
     * GitHub API Root
     *
     * @remarks
     * Get Hypermedia links to resources accessible in GitHub's REST API
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#root-endpoint} - API method documentation
     */
    metaRoot(config?: AxiosRequestConfig): Promise<operations.MetaRootResponse>;
}
