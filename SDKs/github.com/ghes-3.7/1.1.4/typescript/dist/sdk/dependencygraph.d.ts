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
     * Create a snapshot of dependencies for a repository
     *
     * @remarks
     * Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository} - API method documentation
     */
    dependencyGraphCreateRepositorySnapshot(req: operations.DependencyGraphCreateRepositorySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DependencyGraphCreateRepositorySnapshotResponse>;
    /**
     * Get a diff of the dependencies between commits
     *
     * @remarks
     * Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits} - API method documentation
     */
    dependencyGraphDiffRange(req: operations.DependencyGraphDiffRangeRequest, config?: AxiosRequestConfig): Promise<operations.DependencyGraphDiffRangeResponse>;
}
