import { AxiosInstance } from "axios";
import { Bills } from "./bills";
import { Committees } from "./committees";
import { Jurisdictions } from "./jurisdictions";
import { People } from "./people";
export declare const ServerList: readonly ["https://openstates.org"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    bills: Bills;
    committees: Committees;
    jurisdictions: Jurisdictions;
    people: People;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
