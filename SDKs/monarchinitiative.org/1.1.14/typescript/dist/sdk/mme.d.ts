import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Match patients with similar diseases and non-human genes based on their phenotypes
 */
export declare class Mme {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Match a patient to diseases based on their phenotypes
     */
    postDiseaseMme(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostDiseaseMmeResponse>;
    /**
     * Match a patient to fruit fly genes based on similar phenotypes
     */
    postFlyMme(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostFlyMmeResponse>;
    /**
     * Match a patient to mouse genes based on similar phenotypes
     */
    postMouseMme(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostMouseMmeResponse>;
    /**
     * Match a patient to nematode genes based on similar phenotypes
     */
    postNematodeMme(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostNematodeMmeResponse>;
    /**
     * Match a patient to zebrafish genes based on similar phenotypes
     */
    postZebrafishMme(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostZebrafishMmeResponse>;
}
