import { AxiosInstance } from "axios";
import { Blocks } from "./blocks";
import { Databases } from "./databases";
import { Pages } from "./pages";
import { Users } from "./users";
export declare const ServerList: readonly ["https://api.notion.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    blocks: Blocks;
    databases: Databases;
    pages: Pages;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
