import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Tag Manager Container Version Header.
 */
export declare class ContainerVersionHeader extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string;
    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean;
    /**
     * Container version display name.
     */
    name?: string;
    /**
     * Number of clients in the container version.
     */
    numClients?: string;
    /**
     * Number of custom templates in the container version.
     */
    numCustomTemplates?: string;
    /**
     * Number of Google tag configs in the container version.
     */
    numGtagConfigs?: string;
    /**
     * Number of macros in the container version.
     */
    numMacros?: string;
    /**
     * Number of rules in the container version.
     */
    numRules?: string;
    /**
     * Number of tags in the container version.
     */
    numTags?: string;
    /**
     * Number of triggers in the container version.
     */
    numTriggers?: string;
    /**
     * Number of variables in the container version.
     */
    numVariables?: string;
    /**
     * Number of zones in the container version.
     */
    numZones?: string;
    /**
     * GTM Container Version's API relative path.
     */
    path?: string;
}
