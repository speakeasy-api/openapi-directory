import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Strings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectStrings - Get a list of strings and its translations in the project.
    **/
    getProjectStrings(req: operations.GetProjectStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStringsResponse>;
    /**
     * getProjectStringsForLanguage - Get a list of strings and its translations in the project for this target language in the project.
    **/
    getProjectStringsForLanguage(req: operations.GetProjectStringsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStringsForLanguageResponse>;
    /**
     * getStrings - Get a list of client/corporate strings (20 per page)
    **/
    getStrings(req: operations.GetStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetStringsResponse>;
    /**
     * packageProjectTranslationMemory - Get the translation memory of a project in TMX format
    **/
    packageProjectTranslationMemory(req: operations.PackageProjectTranslationMemoryRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryResponse>;
    /**
     * packageProjectTranslationMemoryForLanguage - Get the translation memory of a project in TMX format
    **/
    packageProjectTranslationMemoryForLanguage(req: operations.PackageProjectTranslationMemoryForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryForLanguageResponse>;
    /**
     * packageProjectTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
    **/
    packageProjectTranslationMemoryForLanguageStatus(req: operations.PackageProjectTranslationMemoryForLanguageStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryForLanguageStatusResponse>;
    /**
     * packageProjectTranslationMemoryStatus - If package call was async, check the status of the request
    **/
    packageProjectTranslationMemoryStatus(req: operations.PackageProjectTranslationMemoryStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryStatusResponse>;
    /**
     * packageUserTranslationMemory - Get the translation memory of a client or corporate in TMX format
    **/
    packageUserTranslationMemory(req: operations.PackageUserTranslationMemoryRequest, config?: AxiosRequestConfig): Promise<operations.PackageUserTranslationMemoryResponse>;
    /**
     * packageUserTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
    **/
    packageUserTranslationMemoryForLanguageStatus(req: operations.PackageUserTranslationMemoryForLanguageStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageUserTranslationMemoryForLanguageStatusResponse>;
    /**
     * postStrings - Translate Strings with MT
    **/
    postStrings(req: operations.PostStringsRequest, config?: AxiosRequestConfig): Promise<operations.PostStringsResponse>;
    /**
     * updateTranslationMemoryUnit - Update translation
     *
     * Update a translation by adding a new translation memory unit item
    **/
    updateTranslationMemoryUnit(req: operations.UpdateTranslationMemoryUnitRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTranslationMemoryUnitResponse>;
}
