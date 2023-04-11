import { Campaigns } from "./campaigns";
import { Channels } from "./channels";
import { ChannelTypes } from "./channeltypes";
import { CustomCommands } from "./customcommands";
import { Devices } from "./devices";
import { Events } from "./events";
import { Files } from "./files";
import { Gdpr } from "./gdpr";
import { Imports } from "./imports";
import { Messages } from "./messages";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Moderation } from "./moderation";
import { PermissionsV2 } from "./permissionsv2";
import { Push } from "./push";
import { Settings } from "./settings";
import { Testing } from "./testing";
import { Users } from "./users";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://chat.stream-io-api.com", "http://localhost:{port}"];
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
 *
 * @see {@link https://getstream.io/chat/docs/} - Stream Chat Documentation
 */
export declare class SDK {
    campaigns: Campaigns;
    channelTypes: ChannelTypes;
    channels: Channels;
    customCommands: CustomCommands;
    devices: Devices;
    events: Events;
    files: Files;
    gdpr: Gdpr;
    imports: Imports;
    messages: Messages;
    moderation: Moderation;
    permissionsV2: PermissionsV2;
    push: Push;
    settings: Settings;
    testing: Testing;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get Call Token ()
     *
     * @remarks
     * Retrieves the token to join a call
     */
    getCallToken1(req: shared.GetCallTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetCallToken1Response>;
}
