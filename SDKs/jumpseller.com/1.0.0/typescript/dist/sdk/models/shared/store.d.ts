import { SpeakeasyBase } from "../../../internal/utils";
import { StoreAddress } from "./storeaddress";
/**
 * OK
 */
export declare class Store extends SpeakeasyBase {
    address?: StoreAddress;
    /**
     * Store Code
     */
    code?: string;
    /**
     * Store Country
     */
    country?: string;
    /**
     * Store Currency
     */
    currency?: string;
    /**
     * Store Admin Email
     */
    email?: string;
    /**
     * Store Hooks Auth token
     */
    hooksToken?: string;
    /**
     * Store Logo URL
     */
    logo?: string;
    /**
     * Store Name
     */
    name?: string;
    /**
     * Store Timezone
     */
    timezone?: string;
    /**
     * Store URL
     */
    url?: string;
    /**
     * Store Weight Unit
     */
    weightUnit?: string;
}
