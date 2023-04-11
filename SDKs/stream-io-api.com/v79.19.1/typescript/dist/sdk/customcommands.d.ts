import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomCommands {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create command
     *
     * @remarks
     * Creates custom chat command
     */
    createCommand(req: shared.CreateCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommandResponse>;
    /**
     * List commands
     *
     * @remarks
     * Returns all custom commands
     */
    listCommands(config?: AxiosRequestConfig): Promise<operations.ListCommandsResponse>;
}
