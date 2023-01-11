import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Agreements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * acceptEua - Accept an end-user agreement via the API.
    **/
    acceptEua(req: operations.AcceptEuaRequest, config?: AxiosRequestConfig): Promise<operations.AcceptEuaResponse>;
    /**
     * createEua - API endpoints related to end-user agreements.
    **/
    createEua(req: operations.CreateEuaRequest, config?: AxiosRequestConfig): Promise<operations.CreateEuaResponse>;
    /**
     * deleteEuaById - Delete End User Agreement.
    **/
    deleteEuaById(req: operations.DeleteEuaByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEuaByIdResponse>;
    /**
     * retrieveEuaById - API endpoints related to end-user agreements.
    **/
    retrieveEuaById(req: operations.RetrieveEuaByIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveEuaByIdResponse>;
    /**
     * retrieveEuaText - Show the text of the end-user agreement.
    **/
    retrieveEuaText(req: operations.RetrieveEuaTextRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveEuaTextResponse>;
    /**
     * retrieveAllEuAsForAnEndUser - API endpoints related to end-user agreements.
    **/
    retrieveAllEuAsForAnEndUser(req: operations.RetrieveAllEuAsForAnEndUserRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAllEuAsForAnEndUserResponse>;
}
