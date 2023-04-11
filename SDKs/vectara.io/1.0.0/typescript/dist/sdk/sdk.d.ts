import { AdminService } from "./adminservice";
import { IndexService } from "./indexservice";
import * as shared from "./models/shared";
import { QueryService } from "./queryservice";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.vectara.io"];
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
 * Vectara is a neural search platform, built for developers to get the most out of their data.
 *
 * @remarks
 *
 * You can sign up for an account at [https://vectara.com](https://vectara.com).
 */
export declare class SDK {
    /**
     * Administrative services, such as creating or deleting corpora
     */
    adminService: AdminService;
    /**
     * Indexing operations, such as creating and deleting documents
     */
    indexService: IndexService;
    /**
     * Query operations, such as performing a standard search
     */
    queryService: QueryService;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
