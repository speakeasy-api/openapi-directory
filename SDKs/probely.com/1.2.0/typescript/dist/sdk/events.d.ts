import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTargetsTargetIdWebhooksId - Delete target webhook
    **/
    deleteTargetsTargetIdWebhooksId(req: operations.DeleteTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdWebhooksIdResponse>;
    /**
     * deleteWebhooksId - Delete account webhook
    **/
    deleteWebhooksId(req: operations.DeleteWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdResponse>;
    /**
     * getEvents - List account events
    **/
    getEvents(config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * getEventsId - Retrieve account event
    **/
    getEventsId(req: operations.GetEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsIdResponse>;
    /**
     * getTargetsTargetIdEvents - List target events
    **/
    getTargetsTargetIdEvents(req: operations.GetTargetsTargetIdEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdEventsResponse>;
    /**
     * getTargetsTargetIdEventsId - Retrieve target event
    **/
    getTargetsTargetIdEventsId(req: operations.GetTargetsTargetIdEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdEventsIdResponse>;
    /**
     * getTargetsTargetIdWebhooks - List target webhooks
    **/
    getTargetsTargetIdWebhooks(req: operations.GetTargetsTargetIdWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdWebhooksResponse>;
    /**
     * getTargetsTargetIdWebhooksId - Retrieve target webhook
    **/
    getTargetsTargetIdWebhooksId(req: operations.GetTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdWebhooksIdResponse>;
    /**
     * getWebhooks - List account webhooks
    **/
    getWebhooks(config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * getWebhooksId - Retrieve account webhook
    **/
    getWebhooksId(req: operations.GetWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdResponse>;
    /**
     * patchTargetsTargetIdWebhooksId - Partial update target webhook
    **/
    patchTargetsTargetIdWebhooksId(req: operations.PatchTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdWebhooksIdResponse>;
    /**
     * patchWebhooksId - Partial update account webhook
    **/
    patchWebhooksId(req: operations.PatchWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchWebhooksIdResponse>;
    /**
     * postTargetsTargetIdWebhooks - Create new target webhook
    **/
    postTargetsTargetIdWebhooks(req: operations.PostTargetsTargetIdWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdWebhooksResponse>;
    /**
     * postWebhooks - Create new account webhook
    **/
    postWebhooks(req: operations.PostWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * putTargetsTargetIdWebhooksId - Update target webhook
    **/
    putTargetsTargetIdWebhooksId(req: operations.PutTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdWebhooksIdResponse>;
    /**
     * putWebhooksId - Update account webhook
    **/
    putWebhooksId(req: operations.PutWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksIdResponse>;
}
