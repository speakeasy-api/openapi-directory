import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Onboarding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List categories for onboarding experience.
     */
    booksOnboardingListCategories(req: operations.BooksOnboardingListCategoriesRequest, security: operations.BooksOnboardingListCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.BooksOnboardingListCategoriesResponse>;
    /**
     * List available volumes under categories for onboarding experience.
     */
    booksOnboardingListCategoryVolumes(req: operations.BooksOnboardingListCategoryVolumesRequest, security: operations.BooksOnboardingListCategoryVolumesSecurity, config?: AxiosRequestConfig): Promise<operations.BooksOnboardingListCategoryVolumesResponse>;
}
