import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Qshow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteQshow - Delete a qshow.
     *
    **/
    deleteQshow(req: operations.DeleteQshowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQshowResponse>;
    /**
     * getQshow - Gets a details about a qshow.
     *
    **/
    getQshow(req: operations.GetQshowRequest, config?: AxiosRequestConfig): Promise<operations.GetQshowResponse>;
    /**
     * getQshowList - Get the list of Qshows in They Said So platform.
    **/
    getQshowList(req: operations.GetQshowListRequest, config?: AxiosRequestConfig): Promise<operations.GetQshowListResponse>;
    /**
     * getQshowQuotes - Get the quotes in a given Qshow.
    **/
    getQshowQuotes(req: operations.GetQshowQuotesRequest, config?: AxiosRequestConfig): Promise<operations.GetQshowQuotesResponse>;
    /**
     * patchQshow - Update an existing qshow.
    **/
    patchQshow(req: operations.PatchQshowRequest, config?: AxiosRequestConfig): Promise<operations.PatchQshowResponse>;
    /**
     * postQshowQuotesAdd - Add a quote to a given Qshow.
    **/
    postQshowQuotesAdd(req: operations.PostQshowQuotesAddRequest, config?: AxiosRequestConfig): Promise<operations.PostQshowQuotesAddResponse>;
    /**
     * postQshowQuotesRemove - Remove a quote to a given Qshow.
    **/
    postQshowQuotesRemove(req: operations.PostQshowQuotesRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostQshowQuotesRemoveResponse>;
    /**
     * putQshow - Create and add a new qshow to your private collection.
    **/
    putQshow(req: operations.PutQshowRequest, config?: AxiosRequestConfig): Promise<operations.PutQshowResponse>;
}
