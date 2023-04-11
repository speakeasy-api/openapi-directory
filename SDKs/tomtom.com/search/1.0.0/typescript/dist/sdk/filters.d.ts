import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Filters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Geometry Filter
     */
    getSearchVersionNumberGeometryFilterExt(req: operations.GetSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * Routed Filter
     */
    getSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
    /**
     * Geometry Filter
     */
    postSearchVersionNumberGeometryFilterExt(req: operations.PostSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * Routed Filter
     */
    postSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
}
