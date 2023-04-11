import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * annotate text using named entities
 */
export declare class NlpAnnotate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Annotate a given text using SciGraph annotator
     */
    getAnnotate(req: operations.GetAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotateResponse>;
    /**
     * Annotate a given content using SciGraph annotator and get all entities from content
     */
    getAnnotateEntities(req: operations.GetAnnotateEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotateEntitiesResponse>;
    /**
     * Annotate a given text using SciGraph annotator
     */
    postAnnotate(req: operations.PostAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnotateResponse>;
    /**
     * Annotate a given content using SciGraph annotator and get all entities from content
     */
    postAnnotateEntities(req: operations.PostAnnotateEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnotateEntitiesResponse>;
}
