import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for adding/changing metadata items for an instance.
 */
export declare class UpdateInstanceMetadataItemsResponse extends SpeakeasyBase {
    /**
     * Map of items that were added/updated to/in the metadata.
     */
    items?: Record<string, string>;
}
