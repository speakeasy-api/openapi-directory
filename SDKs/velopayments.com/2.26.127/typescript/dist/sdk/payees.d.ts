import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePayeeByIdV3 - Delete Payee by Id
     *
     * <p>Use v4 instead</p>
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
    **/
    deletePayeeByIdV3(req: operations.DeletePayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV3Response>;
    /**
     * deletePayeeByIdV4 - Delete Payee by Id
     *
     * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
     * <p>* Payee ID is not found</p>
     * <p>* If Payee has not been on-boarded</p>
     * <p>* If Payee is in grace period</p>
     * <p>* If Payee has existing payments</p>
     *
    **/
    deletePayeeByIdV4(req: operations.DeletePayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.DeletePayeeByIdV4Response>;
    /**
     * getPayeeByIdV3 - Get Payee by Id
     *
     * <p>Use v4 instead</p>
     * <p>Get Payee by Id</p>
     *
    **/
    getPayeeByIdV3(req: operations.GetPayeeByIdV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV3Response>;
    /**
     * getPayeeByIdV4 - Get Payee by Id
     *
     * Get Payee by Id
    **/
    getPayeeByIdV4(req: operations.GetPayeeByIdV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdV4Response>;
    /**
     * listPayeeChangesV3 - List Payee Changes
     *
     * <p>Use v4 instead</p>
     * <p>Get a paginated response listing payee changes.</p>
     *
    **/
    listPayeeChangesV3(req: operations.ListPayeeChangesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV3Response>;
    /**
     * listPayeeChangesV4 - List Payee Changes
     *
     * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
     * - dbaName
     * - displayName
     * - email
     * - onboardedStatus
     * - payeeCountry
     * - payeeId
     * - remoteId
     *
    **/
    listPayeeChangesV4(req: operations.ListPayeeChangesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeeChangesV4Response>;
    /**
     * listPayeesV3 - List Payees
     *
     * <p>Use v4 instead</p>
     * Get a paginated response listing the payees for a payor.
     *
    **/
    listPayeesV3(req: operations.ListPayeesV3Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV3Response>;
    /**
     * listPayeesV4 - List Payees
     *
     * Get a paginated response listing the payees for a payor.
    **/
    listPayeesV4(req: operations.ListPayeesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPayeesV4Response>;
    /**
     * payeeDetailsUpdateV3 - Update Payee Details
     *
     * <p>Use v4 instead</p>
     * <p>Update payee details for the given Payee Id.<p>
     *
    **/
    payeeDetailsUpdateV3(req: operations.PayeeDetailsUpdateV3Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV3Response>;
    /**
     * payeeDetailsUpdateV4 - Update Payee Details
     *
     * <p>Update payee details for the given Payee Id.<p>
     *
    **/
    payeeDetailsUpdateV4(req: operations.PayeeDetailsUpdateV4Request, config?: AxiosRequestConfig): Promise<operations.PayeeDetailsUpdateV4Response>;
    /**
     * postV3PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
     *
     * <p>Use v4 instead</p>
     * <p>Update the remote Id for the given Payee Id.</p>
     *
    **/
    postV3PayeesPayeeIdRemoteIdUpdate(req: operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse>;
    /**
     * postV4PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
     *
     * <p>Update the remote Id for the given Payee Id.</p>
     *
    **/
    postV4PayeesPayeeIdRemoteIdUpdate(req: operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse>;
}
