import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
 */
export declare class EditGuaranteedOrderReadAccessorsRequest extends SpeakeasyBase {
    /**
     * The advertisers to add as read accessors to the guaranteed order.
     */
    addedAdvertisers?: string[];
    /**
     * Required. The partner context in which the change is being made.
     */
    partnerId?: string;
    /**
     * Whether to give all advertisers of the read/write accessor partner read access to the guaranteed order. Only applicable if read_write_partner_id is set in the guaranteed order.
     */
    readAccessInherited?: boolean;
    /**
     * The advertisers to remove as read accessors to the guaranteed order.
     */
    removedAdvertisers?: string[];
}
