import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewPartnerStoreStore extends SpeakeasyBase {
    /**
     * New Store code.
     */
    code?: string;
    /**
     * Partner email.
     */
    emailPartner?: string;
    /**
     * New Store name.
     */
    name?: string;
    /**
     * New Store redirect url.
     */
    redirectUrl?: string;
}
export declare class NewPartnerStore extends SpeakeasyBase {
    store?: NewPartnerStoreStore;
}
