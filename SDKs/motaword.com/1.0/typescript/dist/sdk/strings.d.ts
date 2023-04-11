import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Strings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clear translation cache
     *
     * @remarks
     * Clear/delete continuous project translation cache.
     */
    clearTranslationCache(req: operations.ClearTranslationCacheRequest, config?: AxiosRequestConfig): Promise<operations.ClearTranslationCacheResponse>;
    /**
     * View strings their translations in a continuous document
     *
     * @remarks
     * View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getContinuousProjectFileStrings(req: operations.GetContinuousProjectFileStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectFileStringsResponse>;
    /**
     * View strings and translations in continuous project
     *
     * @remarks
     * View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getContinuousProjectStrings(req: operations.GetContinuousProjectStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectStringsResponse>;
    /**
     * View strings and translations of a document
     *
     * @remarks
     * View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getDocumentTranslations(req: operations.GetDocumentTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentTranslationsResponse>;
    /**
     * View strings and translations of a document for target language
     *
     * @remarks
     * View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getDocumentTranslationsForLanguage(req: operations.GetDocumentTranslationsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentTranslationsForLanguageResponse>;
    /**
     * View project strings and translations
     *
     * @remarks
     * View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getProjectStrings(req: operations.GetProjectStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStringsResponse>;
    /**
     * View strings and translations for target language
     *
     * @remarks
     * View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
     */
    getProjectStringsForLanguage(req: operations.GetProjectStringsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStringsForLanguageResponse>;
    /**
     * Deprecated. Use /projects/{projectId}/strings instead.
     */
    getProjectTranslations(req: operations.GetProjectTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTranslationsResponse>;
    /**
     * Deprecated. use /projects/{projectId}/strings/{language} instead.
     */
    getProjectTranslationsForLanguage(req: operations.GetProjectTranslationsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTranslationsForLanguageResponse>;
    /**
     * View account strings (translation memory)
     *
     * @remarks
     * Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.
     */
    getStrings(req: operations.GetStringsRequest, config?: AxiosRequestConfig): Promise<operations.GetStringsResponse>;
    /**
     * View cached strings translations in continuous project
     *
     * @remarks
     * MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.
     */
    getTranslationCache(req: operations.GetTranslationCacheRequest, config?: AxiosRequestConfig): Promise<operations.GetTranslationCacheResponse>;
    /**
     * Download project translation memory
     *
     * @remarks
     * Package and download project translation memory in TMX format
     */
    packageProjectTranslationMemory(req: operations.PackageProjectTranslationMemoryRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryResponse>;
    /**
     * Download language-specific project translation memory
     *
     * @remarks
     * Package and download project translation memory in TMX format for a specific target language.
     */
    packageProjectTranslationMemoryForLanguage(req: operations.PackageProjectTranslationMemoryForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryForLanguageResponse>;
    /**
     * Check language-specific translation memory packaging status
     *
     * @remarks
     * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
     */
    packageProjectTranslationMemoryForLanguageStatus(req: operations.PackageProjectTranslationMemoryForLanguageStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryForLanguageStatusResponse>;
    /**
     * Check translation memory packaging status
     *
     * @remarks
     * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
     */
    packageProjectTranslationMemoryStatus(req: operations.PackageProjectTranslationMemoryStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageProjectTranslationMemoryStatusResponse>;
    /**
     * Download account translation memory
     *
     * @remarks
     * Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.
     */
    packageUserTranslationMemory(req: operations.PackageUserTranslationMemoryRequest, config?: AxiosRequestConfig): Promise<operations.PackageUserTranslationMemoryResponse>;
    /**
     * Check account translation memory packaging status
     *
     * @remarks
     * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
     */
    packageUserTranslationMemoryForLanguageStatus(req: operations.PackageUserTranslationMemoryForLanguageStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageUserTranslationMemoryForLanguageStatusResponse>;
    /**
     * Get a list of strings and its translations in the project.
     */
    postContinuousProjectFileStrings(req: operations.PostContinuousProjectFileStringsRequest, config?: AxiosRequestConfig): Promise<operations.PostContinuousProjectFileStringsResponse>;
    /**
     * Translate Strings with MT
     *
     * @remarks
     * Deprecated, use instant translation mechanism for continuous projects.
     */
    postStrings(req: shared.DeprecatedStringTranslationContent, config?: AxiosRequestConfig): Promise<operations.PostStringsResponse>;
    /**
     * Recache translations
     *
     * @remarks
     * Recache translations for the continuous project.
     */
    recacheTranslations(req: operations.RecacheTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.RecacheTranslationsResponse>;
    /**
     * Update string translation
     *
     * @remarks
     * Update the translation of a string from your account strings/translation memory.
     */
    updateTranslationMemoryUnit(req: shared.TranslationMemoryUnit, config?: AxiosRequestConfig): Promise<operations.UpdateTranslationMemoryUnitResponse>;
}
