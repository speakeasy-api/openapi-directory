import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesAddonReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the addon.
     */
    provider: string;
}
/**
 * The properties of the node addon entity.
 */
export declare class NodesAddonReadNodeAddonAttributes extends SpeakeasyBase {
    /**
     * Whether or not this node has been configured with an addon folder.
     */
    configured?: boolean;
    /**
     * Whether or not this node has a NodeSettings object associated with it.
     */
    enabled?: boolean;
    /**
     * The ID of the associated node addon account, if any.
     */
    externalAccountId?: string;
    /**
     * The ID of the linked folder from the addon provider.
     */
    folderId?: string;
    /**
     * The folder path of the linked folder from the addon provider. Google Drive specific
     */
    folderPath?: string;
    /**
     * A label specific to the addon provider.
     */
    label?: string;
    /**
     * Whether or not this node is fully authorized to use this node addon.
     */
    nodeHasAuth?: boolean;
    /**
     * An external link specific to the addon provider.
     */
    url?: string;
}
/**
 * URLs to alternative representations of the node addon entity.
 */
export declare class NodesAddonReadNodeAddonLinks extends SpeakeasyBase {
    /**
     * A link to the the canonical API endpoint for this node addon.
     */
    self: string;
}
/**
 * OK
 */
export declare class NodesAddonReadNodeAddon extends SpeakeasyBase {
    /**
     * The properties of the node addon entity.
     */
    attributes?: NodesAddonReadNodeAddonAttributes;
    /**
     * The unique identifier of the draft registration entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the node addon entity.
     */
    links?: NodesAddonReadNodeAddonLinks;
    /**
     * The type identifier of the node addon entity (`node_addons`).
     */
    type: string;
}
export declare class NodesAddonReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
