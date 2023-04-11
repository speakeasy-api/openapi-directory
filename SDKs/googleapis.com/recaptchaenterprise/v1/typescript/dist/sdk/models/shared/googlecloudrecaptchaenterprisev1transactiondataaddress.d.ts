import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structured address format for billing and shipping addresses.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionDataAddress extends SpeakeasyBase {
    /**
     * The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number.
     */
    address?: string[];
    /**
     * The state, province, or otherwise administrative area of the address.
     */
    administrativeArea?: string;
    /**
     * The town/city of the address.
     */
    locality?: string;
    /**
     * The postal or ZIP code of the address.
     */
    postalCode?: string;
    /**
     * The recipient name, potentially including information such as "care of".
     */
    recipient?: string;
    /**
     * The CLDR country/region of the address.
     */
    regionCode?: string;
}
