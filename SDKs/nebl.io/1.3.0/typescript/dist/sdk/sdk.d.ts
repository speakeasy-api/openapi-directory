import { Insight } from "./insight";
import { JsonRpc } from "./jsonrpc";
import { Ntp1 } from "./ntp1";
import { TestnetFaucet } from "./testnetfaucet";
import { TestnetInsight } from "./testnetinsight";
import { TestnetNtp1 } from "./testnetntp1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ntp1node.nebl.io/"];
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
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 */
export declare class SDK {
    insight: Insight;
    jsonRpc: JsonRpc;
    ntp1: Ntp1;
    testnetFaucet: TestnetFaucet;
    testnetInsight: TestnetInsight;
    testnetNtp1: TestnetNtp1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
