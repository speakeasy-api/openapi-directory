import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Coterm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the licenses in a coterm organization
     *
     * @remarks
     * List the licenses in a coterm organization
     */
    getOrganizationLicensingCotermLicenses(req: operations.GetOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensingCotermLicensesResponse>;
    /**
     * Moves a license to a different organization (coterm only)
     *
     * @remarks
     * Moves a license to a different organization (coterm only)
     */
    moveOrganizationLicensingCotermLicenses(req: operations.MoveOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensingCotermLicensesResponse>;
}
