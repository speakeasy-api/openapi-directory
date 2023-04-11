import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.
 *
 * @remarks
 *
 * On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.
 *
 * To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.
 *
 */
export declare class ISOs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all ISOs
     *
     * @remarks
     * Returns all available ISO objects.
     */
    getIsos(req: operations.GetIsosRequest, config?: AxiosRequestConfig): Promise<operations.GetIsosResponse>;
    /**
     * Get an ISO
     *
     * @remarks
     * Returns a specific ISO object.
     */
    getIsosId(req: operations.GetIsosIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIsosIdResponse>;
}
