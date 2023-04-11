import { SpeakeasyBase } from "../../../internal/utils";
import { EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate } from "./editinventorysourcereadwriteaccessorsrequestadvertisersupdate";
/**
 * Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
 */
export declare class EditInventorySourceReadWriteAccessorsRequest extends SpeakeasyBase {
    /**
     * Update to the list of advertisers with read/write access to the inventory source.
     */
    advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;
    /**
     * Set the partner context as read/write accessor of the inventory source. This will remove all other current read/write advertiser accessors.
     */
    assignPartner?: boolean;
    /**
     * Required. The partner context by which the accessors change is being made.
     */
    partnerId?: string;
}
