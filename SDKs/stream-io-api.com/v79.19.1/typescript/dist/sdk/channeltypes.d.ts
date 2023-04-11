import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create channel type
     *
     * @remarks
     * Creates new channel type
     */
    createChannelType(req: shared.CreateChannelTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelTypeResponse>;
    /**
     * List channel types
     *
     * @remarks
     * Lists all available channel types
     */
    listChannelTypes(config?: AxiosRequestConfig): Promise<operations.ListChannelTypesResponse>;
}
