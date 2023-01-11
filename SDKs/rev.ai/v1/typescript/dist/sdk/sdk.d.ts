import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Account } from "./account";
import { Captions } from "./captions";
import { Jobs } from "./jobs";
import { Transcript } from "./transcript";
export declare const ServerList: readonly ["https://api.rev.ai/speechtotext/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    captions: Captions;
    jobs: Jobs;
    transcript: Transcript;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
