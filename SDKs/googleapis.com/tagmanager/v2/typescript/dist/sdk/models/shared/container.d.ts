import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerFeatures } from "./containerfeatures";
export declare enum ContainerUsageContextEnum {
    UsageContextUnspecified = "usageContextUnspecified",
    Web = "web",
    Android = "android",
    Ios = "ios",
    AndroidSdk5 = "androidSdk5",
    IosSdk5 = "iosSdk5",
    Amp = "amp",
    Server = "server"
}
/**
 * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The Container ID uniquely identifies the GTM Container.
     */
    containerId?: string;
    /**
     * List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    domainName?: string[];
    features?: ContainerFeatures;
    /**
     * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;
    /**
     * Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    name?: string;
    /**
     * Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    notes?: string;
    /**
     * GTM Container's API relative path.
     */
    path?: string;
    /**
     * Container Public ID.
     */
    publicId?: string;
    /**
     * All Tag IDs that refer to this Container.
     */
    tagIds?: string[];
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    taggingServerUrls?: string[];
    /**
     * List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    usageContext?: ContainerUsageContextEnum[];
}
