import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Requisitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete requisition and its end user agreement
     */
    deleteRequisitionByIdV2(req: operations.DeleteRequisitionByIdV2Request, config?: AxiosRequestConfig): Promise<operations.DeleteRequisitionByIdV2Response>;
    /**
     * Retrieve a requisition by ID
     */
    requisitionById(req: operations.RequisitionByIdRequest, config?: AxiosRequestConfig): Promise<operations.RequisitionByIdResponse>;
    /**
     * Create a new requisition
     */
    requisitionCreated(req: shared.RequisitionV2Request, config?: AxiosRequestConfig): Promise<operations.RequisitionCreatedResponse>;
    /**
     * Retrieve all requisitions belonging to the company
     */
    retrieveAllRequisitions(req: operations.RetrieveAllRequisitionsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAllRequisitionsResponse>;
}
