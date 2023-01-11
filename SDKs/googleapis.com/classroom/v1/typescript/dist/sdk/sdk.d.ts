import { AxiosInstance } from "axios";
import { Courses } from "./courses";
import { Invitations } from "./invitations";
import { Registrations } from "./registrations";
import { UserProfiles } from "./userprofiles";
export declare const ServerList: readonly ["https://classroom.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
