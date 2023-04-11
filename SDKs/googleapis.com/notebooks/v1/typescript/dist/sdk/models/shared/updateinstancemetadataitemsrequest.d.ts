import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for adding/changing metadata items for an instance.
 */
export declare class UpdateInstanceMetadataItemsRequest extends SpeakeasyBase {
    /**
     * Metadata items to add/update for the instance.
     */
    items?: Record<string, string>;
}
