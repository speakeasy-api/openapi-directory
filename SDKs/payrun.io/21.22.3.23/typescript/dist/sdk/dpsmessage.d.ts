import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DpsMessage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDpsMessage - Deletes the DPS message
     *
     * Deletes the DPS message
    **/
    deleteDpsMessage(req: operations.DeleteDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsMessageResponse>;
    /**
     * getDpsMessageFromEmployer - Gets the DPS message
     *
     * Gets the DPS message
    **/
    getDpsMessageFromEmployer(req: operations.GetDpsMessageFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageFromEmployerResponse>;
    /**
     * getDpsMessagesFromEmployer - Gets the DPS messages
     *
     * Gets the DPS message links
    **/
    getDpsMessagesFromEmployer(req: operations.GetDpsMessagesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessagesFromEmployerResponse>;
    /**
     * patchDpsMessage - Patches the DPS message
     *
     * Patches the specified DPS message with the supplied values
    **/
    patchDpsMessage(req: operations.PatchDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PatchDpsMessageResponse>;
    /**
     * postDpsMessage - Posta the DPS message
     *
     * Insert new DPS message
    **/
    postDpsMessage(req: operations.PostDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostDpsMessageResponse>;
    /**
     * putDpsMessage - Puts the DPS message
     *
     * Puts the DPS message
    **/
    putDpsMessage(req: operations.PutDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PutDpsMessageResponse>;
}
