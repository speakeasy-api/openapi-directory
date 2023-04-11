import { CompileAPI } from "./compileapi";
import { ConfigAPI } from "./configapi";
import { DataAPI } from "./dataapi";
import { HealthAPI } from "./healthapi";
import { PolicyAPI } from "./policyapi";
import { QueryAPI } from "./queryapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://openpolicy.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * OPA provides policy-based control for cloud native environments. The following *endpoints* (such as `PUT /v1/policies`) provide reference documentation for the OPA REST API.
 *
 * @remarks
 *
 * ### API specification viewing options
 *
 * - **[View the specification in *Redoc* (default)](index.html)**
 * - **[View the specification in *Swagger UI*](swagger-ui.html)**
 *
 * @see {@link https://www.openpolicyagent.org/docs/latest/} - OPA documentation
 */
export declare class SDK {
    /**
     * Posting partial queries to OPA
     */
    compileAPI: CompileAPI;
    configAPI: ConfigAPI;
    /**
     * Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)
     */
    dataAPI: DataAPI;
    /**
     * Executes a simple built-in policy query to verify that the server is operational
     */
    healthAPI: HealthAPI;
    /**
     * Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*
     */
    policyAPI: PolicyAPI;
    /**
     * Posting queries to OPA
     */
    queryAPI: QueryAPI;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
