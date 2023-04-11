import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class EditGuaranteedOrderReadAccessorsResponse extends SpeakeasyBase {
    /**
     * Whether all advertisers of read_write_partner_id have read access to the guaranteed order.
     */
    readAccessInherited?: boolean;
    /**
     * The IDs of advertisers with read access to the guaranteed order.
     */
    readAdvertiserIds?: string[];
}
