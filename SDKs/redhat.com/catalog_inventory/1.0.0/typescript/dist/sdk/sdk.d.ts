import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
import { ServiceCredential } from "./servicecredential";
import { ServiceCredentialType } from "./servicecredentialtype";
import { ServiceInstance } from "./serviceinstance";
import { ServiceInventory } from "./serviceinventory";
import { ServiceOffering } from "./serviceoffering";
import { ServiceOfferingNode } from "./serviceofferingnode";
import { ServicePlan } from "./serviceplan";
import { Source } from "./source";
import { Tags } from "./tags";
import { Task } from "./task";
export declare const ServerList: readonly ["https://cloud.redhat.com/{basePath}", "http://localhost:{port}/{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    serviceCredential: ServiceCredential;
    serviceCredentialType: ServiceCredentialType;
    serviceInstance: ServiceInstance;
    serviceInventory: ServiceInventory;
    serviceOffering: ServiceOffering;
    serviceOfferingNode: ServiceOfferingNode;
    servicePlan: ServicePlan;
    source: Source;
    tags: Tags;
    task: Task;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getDocumentation - Return this API document in JSON format
    **/
    getDocumentation(config?: AxiosRequestConfig): Promise<operations.GetDocumentationResponse>;
    /**
     * postGraphQl - Perform a GraphQL Query
     *
     * Performs a GraphQL Query
    **/
    postGraphQl(req: operations.PostGraphQlRequest, config?: AxiosRequestConfig): Promise<operations.PostGraphQlResponse>;
}
