import { Autnum } from "./autnum";
import { Domain } from "./domain";
import { Entity } from "./entity";
import { Ip } from "./ip";
import { Nameserver } from "./nameserver";
import { V1 } from "./v1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://domainsrdap.googleapis.com/"];
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
 * Read-only public API that lets users search for information about domain names.
 *
 * @see {@link https://developers.google.com/domains/rdap/}
 */
export declare class SDK {
    autnum: Autnum;
    domain: Domain;
    entity: Entity;
    ip: Ip;
    nameserver: Nameserver;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
