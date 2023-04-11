import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdClient extends SpeakeasyBase {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn?: boolean;
    /**
     * Unique identifier of this ad client.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#adClient.
     */
    kind?: string;
    /**
     * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
     */
    productCode?: string;
    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting?: boolean;
}
