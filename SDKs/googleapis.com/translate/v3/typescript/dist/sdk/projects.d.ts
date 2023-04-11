import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     */
    translateProjectsLocationsBatchTranslateDocument(req: operations.TranslateProjectsLocationsBatchTranslateDocumentRequest, security: operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsBatchTranslateDocumentResponse>;
    /**
     * Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     */
    translateProjectsLocationsBatchTranslateText(req: operations.TranslateProjectsLocationsBatchTranslateTextRequest, security: operations.TranslateProjectsLocationsBatchTranslateTextSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsBatchTranslateTextResponse>;
    /**
     * Creates a Dataset.
     */
    translateProjectsLocationsDatasetsCreate(req: operations.TranslateProjectsLocationsDatasetsCreateRequest, security: operations.TranslateProjectsLocationsDatasetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDatasetsCreateResponse>;
    /**
     * Lists sentence pairs in the dataset.
     */
    translateProjectsLocationsDatasetsExamplesList(req: operations.TranslateProjectsLocationsDatasetsExamplesListRequest, security: operations.TranslateProjectsLocationsDatasetsExamplesListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDatasetsExamplesListResponse>;
    /**
     * Exports dataset's data to the provided output location.
     */
    translateProjectsLocationsDatasetsExportData(req: operations.TranslateProjectsLocationsDatasetsExportDataRequest, security: operations.TranslateProjectsLocationsDatasetsExportDataSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDatasetsExportDataResponse>;
    /**
     * Import sentence pairs into translation Dataset.
     */
    translateProjectsLocationsDatasetsImportData(req: operations.TranslateProjectsLocationsDatasetsImportDataRequest, security: operations.TranslateProjectsLocationsDatasetsImportDataSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDatasetsImportDataResponse>;
    /**
     * Lists datasets.
     */
    translateProjectsLocationsDatasetsList(req: operations.TranslateProjectsLocationsDatasetsListRequest, security: operations.TranslateProjectsLocationsDatasetsListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDatasetsListResponse>;
    /**
     * Detects the language of text within a request.
     */
    translateProjectsLocationsDetectLanguage(req: operations.TranslateProjectsLocationsDetectLanguageRequest, security: operations.TranslateProjectsLocationsDetectLanguageSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDetectLanguageResponse>;
    /**
     * Returns a list of supported languages for translation.
     */
    translateProjectsLocationsGetSupportedLanguages(req: operations.TranslateProjectsLocationsGetSupportedLanguagesRequest, security: operations.TranslateProjectsLocationsGetSupportedLanguagesSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGetSupportedLanguagesResponse>;
    /**
     * Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
     */
    translateProjectsLocationsGlossariesCreate(req: operations.TranslateProjectsLocationsGlossariesCreateRequest, security: operations.TranslateProjectsLocationsGlossariesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesCreateResponse>;
    /**
     * Creates a glossary entry.
     */
    translateProjectsLocationsGlossariesGlossaryEntriesCreate(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest, security: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse>;
    /**
     * List the entries for the glossary.
     */
    translateProjectsLocationsGlossariesGlossaryEntriesList(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest, security: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse>;
    /**
     * Updates a glossary entry.
     */
    translateProjectsLocationsGlossariesGlossaryEntriesPatch(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest, security: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse>;
    /**
     * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
     */
    translateProjectsLocationsGlossariesList(req: operations.TranslateProjectsLocationsGlossariesListRequest, security: operations.TranslateProjectsLocationsGlossariesListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    translateProjectsLocationsList(req: operations.TranslateProjectsLocationsListRequest, security: operations.TranslateProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsListResponse>;
    /**
     * Creates a Model.
     */
    translateProjectsLocationsModelsCreate(req: operations.TranslateProjectsLocationsModelsCreateRequest, security: operations.TranslateProjectsLocationsModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsModelsCreateResponse>;
    /**
     * Lists models.
     */
    translateProjectsLocationsModelsList(req: operations.TranslateProjectsLocationsModelsListRequest, security: operations.TranslateProjectsLocationsModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsModelsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    translateProjectsLocationsOperationsCancel(req: operations.TranslateProjectsLocationsOperationsCancelRequest, security: operations.TranslateProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    translateProjectsLocationsOperationsDelete(req: operations.TranslateProjectsLocationsOperationsDeleteRequest, security: operations.TranslateProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    translateProjectsLocationsOperationsGet(req: operations.TranslateProjectsLocationsOperationsGetRequest, security: operations.TranslateProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    translateProjectsLocationsOperationsList(req: operations.TranslateProjectsLocationsOperationsListRequest, security: operations.TranslateProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsListResponse>;
    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     */
    translateProjectsLocationsOperationsWait(req: operations.TranslateProjectsLocationsOperationsWaitRequest, security: operations.TranslateProjectsLocationsOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsWaitResponse>;
    /**
     * Translates documents in synchronous mode.
     */
    translateProjectsLocationsTranslateDocument(req: operations.TranslateProjectsLocationsTranslateDocumentRequest, security: operations.TranslateProjectsLocationsTranslateDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsTranslateDocumentResponse>;
    /**
     * Translates input text and returns translated text.
     */
    translateProjectsLocationsTranslateText(req: operations.TranslateProjectsLocationsTranslateTextRequest, security: operations.TranslateProjectsLocationsTranslateTextSecurity, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsTranslateTextResponse>;
}
