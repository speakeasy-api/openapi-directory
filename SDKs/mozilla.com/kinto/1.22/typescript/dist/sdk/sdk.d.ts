import { Attachment } from "./attachment";
import { Batch } from "./batch";
import { Buckets } from "./buckets";
import { Changess } from "./changess";
import { CollectionChangeset } from "./collectionchangeset";
import { Collections } from "./collections";
import { Groups } from "./groups";
import { Records } from "./records";
import { Utilities } from "./utilities";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://firefox.settings.services.mozilla.com/v1"];
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
export declare class SDK {
    attachment: Attachment;
    batch: Batch;
    buckets: Buckets;
    changess: Changess;
    collectionChangeset: CollectionChangeset;
    collections: Collections;
    groups: Groups;
    records: Records;
    utilities: Utilities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
