import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideoEditor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * authVideoEditor - Get video editor access tokens
    **/
    authVideoEditor(req: operations.AuthVideoEditorRequest, config?: AxiosRequestConfig): Promise<operations.AuthVideoEditorResponse>;
    /**
     * registerEditorInstance - Register instances of the video editor
    **/
    registerEditorInstance(req: operations.RegisterEditorInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterEditorInstanceResponse>;
    /**
     * updateEditorInstance - Update instances of the video editor
    **/
    updateEditorInstance(req: operations.UpdateEditorInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEditorInstanceResponse>;
}
