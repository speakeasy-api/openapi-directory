import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloud.redhat.com/{basePath}", "http://localhost:{port}/{basePath}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Catalog Inventory
 */
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
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Return this API document in JSON format
     */
    getDocumentation(config?: AxiosRequestConfig): Promise<operations.GetDocumentationResponse>;
    /**
     * Perform a GraphQL Query
     *
     * @remarks
     * Performs a GraphQL Query
     */
    postGraphQL(req: shared.GraphQLRequest, config?: AxiosRequestConfig): Promise<operations.PostGraphQLResponse>;
}
