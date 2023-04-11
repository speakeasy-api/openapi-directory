import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum AddonsListAddonAttributesCategoriesEnum {
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
export declare class AddonsListAddonAttributes extends SpeakeasyBase {
    /**
     * List of categories this addon belongs to.
     */
    categories?: AddonsListAddonAttributesCategoriesEnum[];
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
export declare class AddonsListAddon extends SpeakeasyBase {
    /**
     * The properties of the addon entity.
     */
    attributes?: AddonsListAddonAttributes;
    /**
     * The identifier of the addon entity.
     */
    id?: string;
    /**
     * The type identifier of the addon entity (`addons`).
     */
    type?: string;
}
export declare class AddonsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
