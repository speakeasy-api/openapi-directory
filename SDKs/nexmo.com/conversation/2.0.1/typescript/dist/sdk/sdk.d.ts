import { Conversation } from "./conversation";
import { Event } from "./event";
import { Leg } from "./leg";
import { Member } from "./member";
import * as shared from "./models/shared";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v0.1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.
 */
export declare class SDK {
    /**
     * A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.
     */
    conversation: Conversation;
    /**
     * Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users
     */
    event: Event;
    /**
     * A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.
     */
    leg: Leg;
    /**
     * Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.
     */
    member: Member;
    /**
     * The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.
     */
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
