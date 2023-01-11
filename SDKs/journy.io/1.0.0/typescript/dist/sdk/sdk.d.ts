import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Events } from "./events";
import { Users } from "./users";
import { Validation } from "./validation";
import { Websites } from "./websites";
export declare const ServerList: readonly ["https://api.journy.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    events: Events;
    users: Users;
    validation: Validation;
    websites: Websites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
