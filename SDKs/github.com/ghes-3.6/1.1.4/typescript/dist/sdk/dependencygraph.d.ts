import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to access Dependency Graph features.
 */
export declare class DependencyGraph {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a diff of the dependencies between commits
     *
     * @remarks
     * Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits} - API method documentation
     */
    dependencyGraphDiffRange(req: operations.DependencyGraphDiffRangeRequest, config?: AxiosRequestConfig): Promise<operations.DependencyGraphDiffRangeResponse>;
}
