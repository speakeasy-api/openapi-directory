import { Courses } from "./courses";
import { Invitations } from "./invitations";
import { Registrations } from "./registrations";
import { UserProfiles } from "./userprofiles";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://classroom.googleapis.com/"];
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
 * Manages classes, rosters, and invitations in Google Classroom.
 *
 * @see {@link https://developers.google.com/classroom/}
 */
export declare class SDK {
    courses: Courses;
    invitations: Invitations;
    registrations: Registrations;
    userProfiles: UserProfiles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
