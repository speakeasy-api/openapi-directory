import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataItem } from "./metadataitem";
/**
 * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * The fingerprint of the metadata. Required for updating the metadata entries for this instance.
     */
    fingerPrint?: string;
    /**
     * A list of metadata items.
     */
    items?: MetadataItem[];
}
