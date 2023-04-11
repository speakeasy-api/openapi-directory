import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign SM seats to a network
     *
     * @remarks
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
     */
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * Display a license
     *
     * @remarks
     * Display a license
     */
    getOrganizationLicense(req: operations.GetOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicenseResponse>;
    /**
     * List the licenses for an organization
     *
     * @remarks
     * List the licenses for an organization
     */
    getOrganizationLicenses(req: operations.GetOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesResponse>;
    /**
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * List the licenses in a coterm organization
     *
     * @remarks
     * List the licenses in a coterm organization
     */
    getOrganizationLicensingCotermLicenses(req: operations.GetOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensingCotermLicensesResponse>;
    /**
     * Move licenses to another organization
     *
     * @remarks
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
     */
    moveOrganizationLicenses(req: operations.MoveOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesResponse>;
    /**
     * Move SM seats to another organization
     *
     * @remarks
     * Move SM seats to another organization
     */
    moveOrganizationLicensesSeats(req: operations.MoveOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesSeatsResponse>;
    /**
     * Moves a license to a different organization (coterm only)
     *
     * @remarks
     * Moves a license to a different organization (coterm only)
     */
    moveOrganizationLicensingCotermLicenses(req: operations.MoveOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensingCotermLicensesResponse>;
    /**
     * Renew SM seats of a license
     *
     * @remarks
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     */
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * Update a license
     *
     * @remarks
     * Update a license
     */
    updateOrganizationLicense(req: operations.UpdateOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLicenseResponse>;
}
