import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Conversation } from "./conversation";
import { Event } from "./event";
import { Leg } from "./leg";
import { Member } from "./member";
import { User } from "./user";
export declare const ServerList: readonly ["https://api.nexmo.com/v0.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    conversation: Conversation;
    event: Event;
    leg: Leg;
    member: Member;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
