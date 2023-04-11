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
     * Create a custom class.
     */
    speechProjectsLocationsCustomClassesCreate(req: operations.SpeechProjectsLocationsCustomClassesCreateRequest, security: operations.SpeechProjectsLocationsCustomClassesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesCreateResponse>;
    /**
     * List custom classes.
     */
    speechProjectsLocationsCustomClassesList(req: operations.SpeechProjectsLocationsCustomClassesListRequest, security: operations.SpeechProjectsLocationsCustomClassesListSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesListResponse>;
    /**
     * Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
     */
    speechProjectsLocationsPhraseSetsCreate(req: operations.SpeechProjectsLocationsPhraseSetsCreateRequest, security: operations.SpeechProjectsLocationsPhraseSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsCreateResponse>;
    /**
     * Delete a phrase set.
     */
    speechProjectsLocationsPhraseSetsDelete(req: operations.SpeechProjectsLocationsPhraseSetsDeleteRequest, security: operations.SpeechProjectsLocationsPhraseSetsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsDeleteResponse>;
    /**
     * Get a phrase set.
     */
    speechProjectsLocationsPhraseSetsGet(req: operations.SpeechProjectsLocationsPhraseSetsGetRequest, security: operations.SpeechProjectsLocationsPhraseSetsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsGetResponse>;
    /**
     * List phrase sets.
     */
    speechProjectsLocationsPhraseSetsList(req: operations.SpeechProjectsLocationsPhraseSetsListRequest, security: operations.SpeechProjectsLocationsPhraseSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsListResponse>;
    /**
     * Update a phrase set.
     */
    speechProjectsLocationsPhraseSetsPatch(req: operations.SpeechProjectsLocationsPhraseSetsPatchRequest, security: operations.SpeechProjectsLocationsPhraseSetsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsPatchResponse>;
}
