import { ContactGroups } from "./contactgroups";
import { OtherContacts } from "./othercontacts";
import { People } from "./people";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://people.googleapis.com/"];
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
 * Provides access to information about profiles and contacts.
 *
 * @see {@link https://developers.google.com/people/}
 */
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
    private _globals;
    constructor(props?: SDKProps);
}
