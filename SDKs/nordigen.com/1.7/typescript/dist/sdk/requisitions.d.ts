import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Requisitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAspspAuthorizationLink - Get links for user redirection.
    **/
    createAspspAuthorizationLink(req: operations.CreateAspspAuthorizationLinkRequest, config?: AxiosRequestConfig): Promise<operations.CreateAspspAuthorizationLinkResponse>;
    /**
     * createANewRequisition - API endpoints related to requisitions.
    **/
    createANewRequisition(req: operations.CreateANewRequisitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateANewRequisitionResponse>;
    /**
     * deleteRequisition - Delete Requisition and all End User Agreements.
    **/
    deleteRequisition(req: operations.DeleteRequisitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequisitionResponse>;
    /**
     * requisitionById - API endpoints related to requisitions.
    **/
    requisitionById(req: operations.RequisitionByIdRequest, config?: AxiosRequestConfig): Promise<operations.RequisitionByIdResponse>;
    /**
     * retrieveAllRequisitions - API endpoints related to requisitions.
    **/
    retrieveAllRequisitions(req: operations.RetrieveAllRequisitionsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAllRequisitionsResponse>;
}
