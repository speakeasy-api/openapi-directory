import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Filters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearchVersionNumberGeometryFilterExt - Geometry Filter
    **/
    getSearchVersionNumberGeometryFilterExt(req: operations.GetSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * getSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
    **/
    getSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
    /**
     * postSearchVersionNumberGeometryFilterExt - Geometry Filter
    **/
    postSearchVersionNumberGeometryFilterExt(req: operations.PostSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * postSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
    **/
    postSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
}
