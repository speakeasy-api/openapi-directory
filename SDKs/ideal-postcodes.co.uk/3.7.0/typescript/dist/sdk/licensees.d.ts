import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Licensee resource represents an alternate legal End User of our data who may not be same entity as the owners of the account.
 *
 * @remarks
 *
 * The concept of Licensees underpins our sublicensing platform, which allows users to license multiple external organisations or individuals to access data under the same account.
 *
 * Sublicensing is ideal for platform vendors, who provide services to multiple clients who in turn each have their own users.
 *
 */
export declare class Licensees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create
     *
     * @remarks
     * Create a licensee for the specified API Key.
     */
    createLicensee(req: operations.CreateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * Cancel
     *
     * @remarks
     * Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.
     */
    deleteLicensee(req: operations.DeleteLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
     * List
     *
     * @remarks
     * Returns a list of licensees for a key.
     */
    listLicensees(req: operations.ListLicenseesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * Retrieve
     *
     * @remarks
     * Returns licensee information as identified by the licensee key.
     */
    retrieveLicensee(req: operations.RetrieveLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveLicenseeResponse>;
    /**
     * Update
     *
     * @remarks
     * Update Licensee
     */
    updateLicensee(req: operations.UpdateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
}
