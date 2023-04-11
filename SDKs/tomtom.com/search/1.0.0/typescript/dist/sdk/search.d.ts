import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Low Bandwith Category Search
     */
    getSearchVersionNumberCSCategoryExt(req: operations.GetSearchVersionNumberCSCategoryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCSCategoryExtResponse>;
    /**
     * Category Search
     */
    getSearchVersionNumberCategorySearchQueryExt(req: operations.GetSearchVersionNumberCategorySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCategorySearchQueryExtResponse>;
    /**
     * Geometry Search
     */
    getSearchVersionNumberGeometrySearchQueryExt(req: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * Nearby Search
     */
    getSearchVersionNumberNearbySearchExt(req: operations.GetSearchVersionNumberNearbySearchExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberNearbySearchExtResponse>;
    /**
     * Points of Interest Search
     */
    getSearchVersionNumberPoiSearchQueryExt(req: operations.GetSearchVersionNumberPoiSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberPoiSearchQueryExtResponse>;
    /**
     * Routed Search
     */
    getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse>;
    /**
     * Low bandwith Search
     */
    getSearchVersionNumberSQueryExt(req: operations.GetSearchVersionNumberSQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSQueryExtResponse>;
    /**
     * Fuzzy Search
     */
    getSearchVersionNumberSearchQueryExt(req: operations.GetSearchVersionNumberSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSearchQueryExtResponse>;
    /**
     * Geometry Search
     */
    postSearchVersionNumberGeometrySearchQueryExt(req: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * Along Route Search
     */
    postSearchVersionNumberSearchAlongRouteQueryExt(req: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse>;
}
