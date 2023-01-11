import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
    **/
    getSearchVersionNumberCSCategoryExt(req: operations.GetSearchVersionNumberCsCategoryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCsCategoryExtResponse>;
    /**
     * getSearchVersionNumberCategorySearchQueryExt - Category Search
    **/
    getSearchVersionNumberCategorySearchQueryExt(req: operations.GetSearchVersionNumberCategorySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCategorySearchQueryExtResponse>;
    /**
     * getSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    getSearchVersionNumberGeometrySearchQueryExt(req: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * getSearchVersionNumberNearbySearchExt - Nearby Search
    **/
    getSearchVersionNumberNearbySearchExt(req: operations.GetSearchVersionNumberNearbySearchExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberNearbySearchExtResponse>;
    /**
     * getSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
    **/
    getSearchVersionNumberPoiSearchQueryExt(req: operations.GetSearchVersionNumberPoiSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberPoiSearchQueryExtResponse>;
    /**
     * getSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
    **/
    getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse>;
    /**
     * getSearchVersionNumberSQueryExt - Low bandwith Search
    **/
    getSearchVersionNumberSQueryExt(req: operations.GetSearchVersionNumberSQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSQueryExtResponse>;
    /**
     * getSearchVersionNumberSearchQueryExt - Fuzzy Search
    **/
    getSearchVersionNumberSearchQueryExt(req: operations.GetSearchVersionNumberSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSearchQueryExtResponse>;
    /**
     * postSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    postSearchVersionNumberGeometrySearchQueryExt(req: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * postSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
    **/
    postSearchVersionNumberSearchAlongRouteQueryExt(req: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse>;
}
