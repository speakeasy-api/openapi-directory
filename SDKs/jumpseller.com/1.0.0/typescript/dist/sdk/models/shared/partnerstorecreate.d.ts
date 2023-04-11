import { SpeakeasyBase } from "../../../internal/utils";
/**
 * New Store plan name.
 */
export declare enum PartnerStoreCreatePlanNameEnum {
    Pro = "pro",
    Plus = "plus",
    Premium = "premium"
}
/**
 * New partnered Store parameters.
 */
export declare class PartnerStoreCreate extends SpeakeasyBase {
    /**
     * Partner code.
     */
    aff?: string;
    /**
     * New Store administrator email.
     */
    email?: string;
    /**
     * ISO3166-2 code for the store langauge.
     */
    locale?: string;
    /**
     * New Store administrator password.
     */
    password?: string;
    /**
     * New Store plan name.
     */
    planName?: PartnerStoreCreatePlanNameEnum;
    /**
     * Indicates whether the request should fail if the Store name provided is already in use.
     */
    rejectDuplicates?: boolean;
    /**
     * New Store name.
     */
    storeName?: string;
}
