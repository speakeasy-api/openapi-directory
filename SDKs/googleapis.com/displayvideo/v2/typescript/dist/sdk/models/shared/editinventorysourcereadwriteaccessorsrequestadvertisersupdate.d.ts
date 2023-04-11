import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Update to the list of advertisers with read/write access to the inventory source.
 */
export declare class EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate extends SpeakeasyBase {
    /**
     * The advertisers to add.
     */
    addedAdvertisers?: string[];
    /**
     * The advertisers to remove.
     */
    removedAdvertisers?: string[];
}
