import { BucketAccessControls } from "./bucketaccesscontrols";
import { Buckets } from "./buckets";
import { Channels } from "./channels";
import { DefaultObjectAccessControls } from "./defaultobjectaccesscontrols";
import { Notifications } from "./notifications";
import { ObjectAccessControls } from "./objectaccesscontrols";
import { Objects } from "./objects";
import { Projects } from "./projects";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://storage.googleapis.com/storage/v1"];
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
 * Stores and retrieves potentially large, immutable data objects.
 *
 * @see {@link https://developers.google.com/storage/docs/json_api/}
 */
export declare class SDK {
    bucketAccessControls: BucketAccessControls;
    buckets: Buckets;
    channels: Channels;
    defaultObjectAccessControls: DefaultObjectAccessControls;
    notifications: Notifications;
    objectAccessControls: ObjectAccessControls;
    objects: Objects;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
