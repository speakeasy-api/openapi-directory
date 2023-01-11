import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bioentityset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEntitySetAssociations - Returns compact associations for a given input set
    **/
    getEntitySetAssociations(req: operations.GetEntitySetAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetAssociationsResponse>;
    /**
     * getEntitySetGraphResource - TODO Graph object spanning all entities
    **/
    getEntitySetGraphResource(req: operations.GetEntitySetGraphResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetGraphResourceResponse>;
    /**
     * getEntitySetSummary - Summary statistics for objects associated
    **/
    getEntitySetSummary(req: operations.GetEntitySetSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetSummaryResponse>;
    /**
     * getOverRepresentation - Summary statistics for objects associated
    **/
    getOverRepresentation(req: operations.GetOverRepresentationRequest, config?: AxiosRequestConfig): Promise<operations.GetOverRepresentationResponse>;
}
