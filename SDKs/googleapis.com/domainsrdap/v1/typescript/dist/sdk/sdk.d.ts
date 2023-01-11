import { AxiosInstance } from "axios";
import { Autnum } from "./autnum";
import { Domain } from "./domain";
import { Entity } from "./entity";
import { Ip } from "./ip";
import { Nameserver } from "./nameserver";
import { V1 } from "./v1";
export declare const ServerList: readonly ["https://domainsrdap.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
