import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information specific to a store on a merchandising platform linked to a YouTube channel.
 */
export declare class ChannelToStoreLinkDetails extends SpeakeasyBase {
    /**
     * Google Merchant Center id of the store.
     */
    merchantId?: string;
    /**
     * Name of the store.
     */
    storeName?: string;
    /**
     * Landing page of the store.
     */
    storeUrl?: string;
}
