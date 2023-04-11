import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.
 *
 * @remarks
 *
 */
export declare class Payees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Payee by Id
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
     */
    deletePayeeByIdV3(req: operations.DeletePayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV3Response>;
    /**
     * Delete Payee by Id
     *
     * @remarks
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
     */
    deletePayeeByIdV4(req: operations.DeletePayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV4Response>;
    /**
     * Get Payee by Id
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Get Payee by Id</p>
     *
     */
    getPayeeByIdV3(req: operations.GetPayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV3Response>;
    /**
     * Get Payee by Id
     *
     * @remarks
     * Get Payee by Id
     */
    getPayeeByIdV4(req: operations.GetPayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV4Response>;
    /**
     * List Payee Changes
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Get a paginated response listing payee changes.</p>
     *
     */
    listPayeeChangesV3(req: operations.ListPayeeChangesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV3Response>;
    /**
     * List Payee Changes
     *
     * @remarks
     * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
     * - dbaName
     * - displayName
     * - email
     * - onboardedStatus
     * - payeeCountry
     * - payeeId
     * - remoteId
     *
     */
    listPayeeChangesV4(req: operations.ListPayeeChangesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV4Response>;
    /**
     * List Payees
     *
     * @remarks
     * <p>Use v4 instead</p>
     * Get a paginated response listing the payees for a payor.
     *
     */
    listPayeesV3(req: operations.ListPayeesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV3Response>;
    /**
     * List Payees
     *
     * @remarks
     * Get a paginated response listing the payees for a payor.
     */
    listPayeesV4(req: operations.ListPayeesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV4Response>;
    /**
     * Update Payee Details
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Update payee details for the given Payee Id.<p>
     *
     */
    payeeDetailsUpdateV3(req: operations.PayeeDetailsUpdateV3Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV3Response>;
    /**
     * Update Payee Details
     *
     * @remarks
     * <p>Update payee details for the given Payee Id.</p>
     * <p>Payors may only update the payee details if the payee has not yet onboarded</p>
     *
     */
    payeeDetailsUpdateV4(req: operations.PayeeDetailsUpdateV4Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV4Response>;
    /**
     * Update Payee Remote Id
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Update the remote Id for the given Payee Id.</p>
     *
     */
    postV3PayeesPayeeIdRemoteIdUpdate(req: operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse>;
    /**
     * Update Payee Remote Id
     *
     * @remarks
     * <p>Update the remote Id for the given Payee Id.</p>
     *
     */
    postV4PayeesPayeeIdRemoteIdUpdate(req: operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse>;
}
