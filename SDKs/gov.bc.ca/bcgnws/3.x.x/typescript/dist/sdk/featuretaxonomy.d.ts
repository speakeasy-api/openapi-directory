import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FeatureTaxonomy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all feature categories
     *
     * @remarks
     * Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
     */
    getFeatureCategories(req: operations.GetFeatureCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureCategoriesResponse>;
    /**
     * Get all feature classes
     *
     * @remarks
     * Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
     */
    getFeatureClasses(req: operations.GetFeatureClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureClassesResponse>;
    /**
     * Get all feature types
     *
     * @remarks
     * Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
     */
    getFeatureTypes(req: operations.GetFeatureTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureTypesResponse>;
}
