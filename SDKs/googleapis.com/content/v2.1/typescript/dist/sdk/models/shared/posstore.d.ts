import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Store resource.
 */
export declare class PosStore extends SpeakeasyBase {
    /**
     * The business type of the store.
     */
    gcidCategory?: string[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posStore`"
     */
    kind?: string;
    /**
     * The store phone number.
     */
    phoneNumber?: string;
    /**
     * The Google Place Id of the store location.
     */
    placeId?: string;
    /**
     * Required. The street address of the store.
     */
    storeAddress?: string;
    /**
     * Required. A store identifier that is unique for the given merchant.
     */
    storeCode?: string;
    /**
     * The merchant or store name.
     */
    storeName?: string;
    /**
     * The website url for the store or merchant.
     */
    websiteUrl?: string;
}
