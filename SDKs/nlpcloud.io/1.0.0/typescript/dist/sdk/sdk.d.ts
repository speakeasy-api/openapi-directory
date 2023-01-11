import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["https://nlpcloud.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
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
     * readDependenciesV1EnCoreWebSmDependenciesPost - Read Dependencies
    **/
    readDependenciesV1EnCoreWebSmDependenciesPost(req: operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse>;
    /**
     * readEntitiesV1EnCoreWebSmEntitiesPost - Read Entities
    **/
    readEntitiesV1EnCoreWebSmEntitiesPost(req: operations.ReadEntitiesV1EnCoreWebSmEntitiesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse>;
    /**
     * readRootV1EnCoreWebSmGet - Read Root
    **/
    readRootV1EnCoreWebSmGet(config?: AxiosRequestConfig): Promise<operations.ReadRootV1EnCoreWebSmGetResponse>;
    /**
     * readSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPost - Read Sentence Dependencies
    **/
    readSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPost(req: operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse>;
    /**
     * readVersionV1EnCoreWebSmVersionGet - Read Version
    **/
    readVersionV1EnCoreWebSmVersionGet(config?: AxiosRequestConfig): Promise<operations.ReadVersionV1EnCoreWebSmVersionGetResponse>;
}
