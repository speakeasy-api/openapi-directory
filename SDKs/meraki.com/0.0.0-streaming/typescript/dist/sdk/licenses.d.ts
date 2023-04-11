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
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    getOrganizationLicenseState(req: operations.GetOrganizationLicenseStateRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicenseStateResponse>;
    /**
     * List the licenses for an organization
     *
     * @remarks
     * List the licenses for an organization
     */
    getOrganizationLicenses(req: operations.GetOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesResponse>;
    /**
     * Move SM seats to another organization
     *
     * @remarks
     * Move SM seats to another organization
     */
    moveOrganizationLicensesSeats(req: operations.MoveOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesSeatsResponse>;
    /**
     * Renew SM seats of a license
     *
     * @remarks
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     */
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
}
