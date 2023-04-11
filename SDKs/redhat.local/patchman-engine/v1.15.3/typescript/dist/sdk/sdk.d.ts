import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://redhat.local", "/"];
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
 * API of the Patch application on [cloud.redhat.com](cloud.redhat.com)
 *
 * @remarks
 *
 * Syntax of the `filter[name]` query parameters is described in  [Filters documentation](https://github.com/RedHatInsights/patchman-engine/wiki/API-custom-filters)
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Show me metadata of selected package
     *
     * @remarks
     * Show me metadata of selected package
     */
    latestPackage(req: operations.LatestPackageRequest, security: operations.LatestPackageSecurity, config?: AxiosRequestConfig): Promise<operations.LatestPackageResponse>;
    /**
     * Delete system by inventory id
     *
     * @remarks
     * Delete system by inventory id
     */
    deletesystem(req: operations.DeletesystemRequest, security: operations.DeletesystemSecurity, config?: AxiosRequestConfig): Promise<operations.DeletesystemResponse>;
    /**
     * Show me details an advisory by given advisory name
     *
     * @remarks
     * Show me details an advisory by given advisory name
     */
    detailAdvisory(req: operations.DetailAdvisoryRequest, security: operations.DetailAdvisorySecurity, config?: AxiosRequestConfig): Promise<operations.DetailAdvisoryResponse>;
    /**
     * Show me details about a system by given inventory id
     *
     * @remarks
     * Show me details about a system by given inventory id
     */
    detailSystem(req: operations.DetailSystemRequest, security: operations.DetailSystemSecurity, config?: AxiosRequestConfig): Promise<operations.DetailSystemResponse>;
    /**
     * Export applicable advisories for all my systems
     *
     * @remarks
     * Export applicable advisories for all my systems
     */
    exportAdvisories(req: operations.ExportAdvisoriesRequest, security: operations.ExportAdvisoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAdvisoriesResponse>;
    /**
     * Export systems for my account
     *
     * @remarks
     * Export systems for my account
     */
    exportAdvisorySystems(req: operations.ExportAdvisorySystemsRequest, security: operations.ExportAdvisorySystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAdvisorySystemsResponse>;
    /**
     * Show me all my systems which have a package installed
     *
     * @remarks
     * Show me all my systems which have a package installed
     */
    exportPackageSystems(req: operations.ExportPackageSystemsRequest, security: operations.ExportPackageSystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ExportPackageSystemsResponse>;
    /**
     * Show me all installed packages across my systems
     *
     * @remarks
     * Show me all installed packages across my systems
     */
    exportPackages(req: operations.ExportPackagesRequest, security: operations.ExportPackagesSecurity, config?: AxiosRequestConfig): Promise<operations.ExportPackagesResponse>;
    /**
     * Export applicable advisories for all my systems
     *
     * @remarks
     * Export applicable advisories for all my systems
     */
    exportSystemAdvisories(req: operations.ExportSystemAdvisoriesRequest, security: operations.ExportSystemAdvisoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSystemAdvisoriesResponse>;
    /**
     * Show me details about a system packages by given inventory id
     *
     * @remarks
     * Show me details about a system packages by given inventory id
     */
    exportSystemPackages(req: operations.ExportSystemPackagesRequest, security: operations.ExportSystemPackagesSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSystemPackagesResponse>;
    /**
     * Export systems for my account
     *
     * @remarks
     * Export systems for my account
     */
    exportSystems(req: operations.ExportSystemsRequest, security: operations.ExportSystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSystemsResponse>;
    /**
     * Show me all applicable advisories for all my systems
     *
     * @remarks
     * Show me all applicable advisories for all my systems
     */
    listAdvisories(req: operations.ListAdvisoriesRequest, security: operations.ListAdvisoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ListAdvisoriesResponse>;
    /**
     * Show me systems on which the given advisory is applicable
     *
     * @remarks
     * Show me systems on which the given advisory is applicable
     */
    listAdvisorySystems(req: operations.ListAdvisorySystemsRequest, security: operations.ListAdvisorySystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ListAdvisorySystemsResponse>;
    /**
     * Show me all installed packages across my systems
     *
     * @remarks
     * Show me all installed packages across my systems
     */
    listPackages(req: operations.ListPackagesRequest, security: operations.ListPackagesSecurity, config?: AxiosRequestConfig): Promise<operations.ListPackagesResponse>;
    /**
     * Show me advisories for a system by given inventory id
     *
     * @remarks
     * Show me advisories for a system by given inventory id
     */
    listSystemAdvisories(req: operations.ListSystemAdvisoriesRequest, security: operations.ListSystemAdvisoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ListSystemAdvisoriesResponse>;
    /**
     * Show me all my systems
     *
     * @remarks
     * Show me all my systems
     */
    listSystems(req: operations.ListSystemsRequest, security: operations.ListSystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ListSystemsResponse>;
    /**
     * Show me all my systems which have a package installed
     *
     * @remarks
     * Show me all my systems which have a package installed
     */
    packageSystems(req: operations.PackageSystemsRequest, security: operations.PackageSystemsSecurity, config?: AxiosRequestConfig): Promise<operations.PackageSystemsResponse>;
    /**
     * Show me all package versions installed on some system
     *
     * @remarks
     * Show me all package versions installed on some system
     */
    packageVersions(req: operations.PackageVersionsRequest, security: operations.PackageVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.PackageVersionsResponse>;
    /**
     * Show me details about a system packages by given inventory id
     *
     * @remarks
     * Show me details about a system packages by given inventory id
     */
    systemPackages(req: operations.SystemPackagesRequest, security: operations.SystemPackagesSecurity, config?: AxiosRequestConfig): Promise<operations.SystemPackagesResponse>;
    /**
     * View advisory-system pairs for selected systems and advisories
     *
     * @remarks
     * View advisory-system pairs for selected systems and advisories
     */
    viewAdvisoriesSystems(req: shared.ControllersSystemsAdvisoriesRequest, security: operations.ViewAdvisoriesSystemsSecurity, config?: AxiosRequestConfig): Promise<operations.ViewAdvisoriesSystemsResponse>;
    /**
     * View system-advisory pairs for selected systems and advisories
     *
     * @remarks
     * View system-advisory pairs for selected systems and advisories
     */
    viewSystemsAdvisories(req: shared.ControllersSystemsAdvisoriesRequest, security: operations.ViewSystemsAdvisoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ViewSystemsAdvisoriesResponse>;
}
