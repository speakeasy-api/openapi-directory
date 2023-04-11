import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists information about the supported locations for this service.
     */
    artifactregistryProjectsLocationsList(req: operations.ArtifactregistryProjectsLocationsListRequest, security: operations.ArtifactregistryProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsListResponse>;
    /**
     * Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
     */
    artifactregistryProjectsLocationsRepositoriesCreate(req: operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse>;
    /**
     * Lists files.
     */
    artifactregistryProjectsLocationsRepositoriesFilesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse>;
    /**
     * Gets the IAM policy for a given resource.
     */
    artifactregistryProjectsLocationsRepositoriesGetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse>;
    /**
     * Lists repositories.
     */
    artifactregistryProjectsLocationsRepositoriesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesListRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesListResponse>;
    /**
     * Lists packages.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse>;
    /**
     * Creates a tag.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse>;
    /**
     * Lists tags.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesTagsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse>;
    /**
     * Updates a tag.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse>;
    /**
     * Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse>;
    /**
     * Gets a version
     */
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse>;
    /**
     * Lists versions.
     */
    artifactregistryProjectsLocationsRepositoriesPackagesVersionsList(req: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse>;
    /**
     * Updates the IAM policy for a given resource.
     */
    artifactregistryProjectsLocationsRepositoriesSetIamPolicy(req: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse>;
    /**
     * Tests if the caller has a list of permissions on a resource.
     */
    artifactregistryProjectsLocationsRepositoriesTestIamPermissions(req: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest, security: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse>;
}
