import { AxiosInstance } from "axios";
import { Insight } from "./insight";
import { JsonRpc } from "./jsonrpc";
import { Ntp1 } from "./ntp1";
import { TestnetFaucet } from "./testnetfaucet";
import { TestnetInsight } from "./testnetinsight";
import { TestnetNtp1 } from "./testnetntp1";
export declare const ServerList: readonly ["https://ntp1node.nebl.io/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    insight: Insight;
    jsonRPC: JsonRpc;
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
    constructor(props: SDKProps);
}
