import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesAddonsFoldersListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the provider
     */
    provider: string;
}
export declare enum NodesAddonsFoldersListAddonAttributesCategoriesEnum {
    Documentation = "documentation",
    Storage = "storage",
    Bibliography = "bibliography",
    Other = "other",
    Security = "security",
    Citations = "citations"
}
/**
 * The properties of the addon entity.
 */
export declare class NodesAddonsFoldersListAddonAttributes extends SpeakeasyBase {
    /**
     * List of categories this addon belongs to.
     */
    categories?: NodesAddonsFoldersListAddonAttributesCategoriesEnum[];
    /**
     * The description of the service provider.
     */
    description?: string;
    /**
     * The name of the third-party service provider.
     */
    name?: string;
    /**
     * The URL to the third-party service provider.
     */
    url?: string;
}
export declare class NodesAddonsFoldersListAddon extends SpeakeasyBase {
    /**
     * The properties of the addon entity.
     */
    attributes?: NodesAddonsFoldersListAddonAttributes;
    /**
     * The identifier of the addon entity.
     */
    id?: string;
    /**
     * The type identifier of the addon entity (`addons`).
     */
    type?: string;
}
export declare class NodesAddonsFoldersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
