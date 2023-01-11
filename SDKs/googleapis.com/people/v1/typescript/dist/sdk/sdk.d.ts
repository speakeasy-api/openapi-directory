import { AxiosInstance } from "axios";
import { ContactGroups } from "./contactgroups";
import { OtherContacts } from "./othercontacts";
import { People } from "./people";
export declare const ServerList: readonly ["https://people.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    contactGroups: ContactGroups;
    otherContacts: OtherContacts;
    people: People;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
