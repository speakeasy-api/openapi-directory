import { AxiosInstance } from "axios";
import { BucketAccessControls } from "./bucketaccesscontrols";
import { Buckets } from "./buckets";
import { Channels } from "./channels";
import { DefaultObjectAccessControls } from "./defaultobjectaccesscontrols";
import { Notifications } from "./notifications";
import { ObjectAccessControls } from "./objectaccesscontrols";
import { Objects } from "./objects";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://storage.googleapis.com/storage/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
