import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Sending commands to devices and stored command management
 */
export declare class Commands {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Saved Command
     */
    deleteCommandsId(req: operations.DeleteCommandsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommandsIdResponse>;
    /**
     * Fetch a list of Saved Commands
     *
     * @remarks
     * Without params, it returns a list of Saved Commands the user has access to
     */
    getCommands(req: operations.GetCommandsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsResponse>;
    /**
     * Fetch a list of Saved Commands supported by Device at the moment
     *
     * @remarks
     * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
     */
    getCommandsSend(req: operations.GetCommandsSendRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsSendResponse>;
    /**
     * Fetch a list of available Commands for the Device or all possible Commands if Device ommited
     */
    getCommandsTypes(req: operations.GetCommandsTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsTypesResponse>;
    /**
     * Create a Saved Command
     */
    postCommands(req: shared.Command, config?: AxiosRequestConfig): Promise<operations.PostCommandsResponse>;
    /**
     * Dispatch commands to device
     *
     * @remarks
     * Dispatch a new command or Saved Command if _body.id_ set
     */
    postCommandsSend(req: shared.Command, config?: AxiosRequestConfig): Promise<operations.PostCommandsSendResponse>;
    /**
     * Update a Saved Command
     */
    putCommandsId(req: operations.PutCommandsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCommandsIdResponse>;
}
