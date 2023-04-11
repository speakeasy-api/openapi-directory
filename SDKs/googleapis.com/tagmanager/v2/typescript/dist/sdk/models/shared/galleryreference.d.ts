import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the link between a custom template and an entry on the Community Template Gallery site.
 */
export declare class GalleryReference extends SpeakeasyBase {
    /**
     * The name of the host for the community gallery template.
     */
    host?: string;
    /**
     * If a user has manually edited the community gallery template.
     */
    isModified?: boolean;
    /**
     * The name of the owner for the community gallery template.
     */
    owner?: string;
    /**
     * The name of the repository for the community gallery template.
     */
    repository?: string;
    /**
     * The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.
     */
    signature?: string;
    /**
     * The version of the community gallery template.
     */
    version?: string;
}
