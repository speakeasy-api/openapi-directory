import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Glossary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGlossary - Upload a new glossary
     *
     * Upload a new glossary
    **/
    createGlossary(req: operations.CreateGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlossaryResponse>;
    /**
     * deleteGlossary - Delete the glossary
     *
     * Delete the glossary
    **/
    deleteGlossary(req: operations.DeleteGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlossaryResponse>;
    /**
     * downloadGlobalGlossary - Download the global glossary.
     *
     * Download your corporate account's global glossary. This endpoint is available only for corporate account customers.
    **/
    downloadGlobalGlossary(config?: AxiosRequestConfig): Promise<operations.DownloadGlobalGlossaryResponse>;
    /**
     * downloadGlossary - Download a glossary
     *
     * Download a glossary
    **/
    downloadGlossary(req: operations.DownloadGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.DownloadGlossaryResponse>;
    /**
     * getGlossaries - Get a list of glossaries
     *
     * Get a list of glossaries
    **/
    getGlossaries(req: operations.GetGlossariesRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossariesResponse>;
    /**
     * getGlossary - Get single glossary
     *
     * Get single glossary
    **/
    getGlossary(req: operations.GetGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossaryResponse>;
    /**
     * updateGlobalGlossary - Create or update the global glossary.
     *
     * Update your corporate account's global glossary. This endpoint is available only for corporate account customers.
    **/
    updateGlobalGlossary(req: operations.UpdateGlobalGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalGlossaryResponse>;
    /**
     * updateGlossary - Update the glossary.
     *
     * Update the glossary. File name and contents will replaced with the new one.
    **/
    updateGlossary(req: operations.UpdateGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlossaryResponse>;
}
