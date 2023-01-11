import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://palabras-aleatorias-public-api.herokuapp.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getAddWord - Add new word
     *
     * Add a new word. Need to be accepted by a human.
    **/
    getAddWord(req: operations.GetAddWordRequest, config?: AxiosRequestConfig): Promise<operations.GetAddWordResponse>;
    /**
     * getCount - Return the count of words in database
    **/
    getCount(config?: AxiosRequestConfig): Promise<operations.GetCountResponse>;
    /**
     * getEcho - Response with all query params
    **/
    getEcho(config?: AxiosRequestConfig): Promise<operations.GetEchoResponse>;
    /**
     * getOpenapi3Json - Response with all query params
    **/
    getOpenapi3Json(config?: AxiosRequestConfig): Promise<operations.GetOpenapi3JsonResponse>;
    /**
     * getRandom - Return a random spanish word
    **/
    getRandom(config?: AxiosRequestConfig): Promise<operations.GetRandomResponse>;
}
