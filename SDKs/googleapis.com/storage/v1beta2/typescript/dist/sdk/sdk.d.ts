import { AxiosInstance } from "axios";
import { BucketAccessControls } from "./bucketaccesscontrols";
import { Buckets } from "./buckets";
import { Channels } from "./channels";
import { DefaultObjectAccessControls } from "./defaultobjectaccesscontrols";
import { ObjectAccessControls } from "./objectaccesscontrols";
import { Objects } from "./objects";
export declare const ServerList: readonly ["https://storage.googleapis.com/storage/v1beta2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    bucketAccessControls: BucketAccessControls;
    buckets: Buckets;
    channels: Channels;
    defaultObjectAccessControls: DefaultObjectAccessControls;
    objectAccessControls: ObjectAccessControls;
    objects: Objects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
