import { AxiosInstance } from "axios";
import { AccessTokens } from "./accesstokens";
import { RefreshTokens } from "./refreshtokens";
import { Tokens } from "./tokens";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accessTokens: AccessTokens;
    refreshTokens: RefreshTokens;
    tokens: Tokens;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
