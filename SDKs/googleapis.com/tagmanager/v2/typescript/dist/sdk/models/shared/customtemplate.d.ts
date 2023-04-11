import { SpeakeasyBase } from "../../../internal/utils";
import { GalleryReference } from "./galleryreference";
/**
 * Represents a Google Tag Manager Custom Template's contents.
 */
export declare class CustomTemplate extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
     */
    fingerprint?: string;
    /**
     * Represents the link between a custom template and an entry on the Community Template Gallery site.
     */
    galleryReference?: GalleryReference;
    /**
     * Custom Template display name.
     */
    name?: string;
    /**
     * GTM Custom Template's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * The custom template in text format.
     */
    templateData?: string;
    /**
     * The Custom Template ID uniquely identifies the GTM custom template.
     */
    templateId?: string;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
