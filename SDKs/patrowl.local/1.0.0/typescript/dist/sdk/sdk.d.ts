import { PatrowlEngine } from "./patrowlengine";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://patrowl.local", "http://localhost:5001/engines/nmap/", "http://localhost:5004/engines/ssllabs/", "http://localhost:5005/engines/arachni/", "http://localhost:5006/engines/owl_dns/", "http://localhost:5007/engines/virustotal/", "http://localhost:5008/engines/urlvoid/", "http://localhost:5009/engines/cortex/", "http://localhost:5012/engines/owl_leaks/", "http://localhost:5013/engines/owl_code/", "http://localhost:5014/engines/sslscan/"];
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
 * This is the API documentation for Patrowl Engines usage.
 *
 * @see {@link https://github.com/Patrowl/PatrowlDocs} - Find out more about Patrowl
 */
export declare class SDK {
    /**
     * SSLScan API documentation
     *
     * @see {@link https://github.com/Patrowl/PatrowlDocs} - Find out more
     */
    patrowlEngine: PatrowlEngine;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
