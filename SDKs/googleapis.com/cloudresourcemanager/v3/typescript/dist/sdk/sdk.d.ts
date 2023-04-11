import { EffectiveTags } from "./effectivetags";
import { Folders } from "./folders";
import { Liens } from "./liens";
import { Organizations } from "./organizations";
import { Projects } from "./projects";
import { TagBindings } from "./tagbindings";
import { TagKeys } from "./tagkeys";
import { TagValues } from "./tagvalues";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudresourcemanager.googleapis.com/"];
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
 * Creates, reads, and updates metadata for Google Cloud Platform resource containers.
 *
 * @see {@link https://cloud.google.com/resource-manager}
 */
export declare class SDK {
    effectiveTags: EffectiveTags;
    folders: Folders;
    liens: Liens;
    organizations: Organizations;
    projects: Projects;
    tagBindings: TagBindings;
    tagKeys: TagKeys;
    tagValues: TagValues;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
