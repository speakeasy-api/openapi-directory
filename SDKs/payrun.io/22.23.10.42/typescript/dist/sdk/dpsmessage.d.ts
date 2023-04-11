import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DpsMessage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the DPS message
     *
     * @remarks
     * Deletes the DPS message
     */
    deleteDpsMessage(req: operations.DeleteDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsMessageResponse>;
    /**
     * Gets the DPS message
     *
     * @remarks
     * Gets the DPS message
     */
    getDpsMessageFromEmployer(req: operations.GetDpsMessageFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageFromEmployerResponse>;
    /**
     * Gets the DPS messages
     *
     * @remarks
     * Gets the DPS message links
     */
    getDpsMessagesFromEmployer(req: operations.GetDpsMessagesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessagesFromEmployerResponse>;
    /**
     * Patches the DPS message
     *
     * @remarks
     * Patches the specified DPS message with the supplied values
     */
    patchDpsMessage(req: operations.PatchDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PatchDpsMessageResponse>;
    /**
     * Posta the DPS message
     *
     * @remarks
     * Insert new DPS message
     */
    postDpsMessage(req: operations.PostDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostDpsMessageResponse>;
    /**
     * Puts the DPS message
     *
     * @remarks
     * Puts the DPS message
     */
    putDpsMessage(req: operations.PutDpsMessageRequest, config?: AxiosRequestConfig): Promise<operations.PutDpsMessageResponse>;
}
