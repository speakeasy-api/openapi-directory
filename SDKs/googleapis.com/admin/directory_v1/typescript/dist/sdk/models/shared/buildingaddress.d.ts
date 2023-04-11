import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Public API: Resources.buildings
 */
export declare class BuildingAddress extends SpeakeasyBase {
    /**
     * Unstructured address lines describing the lower levels of an address.
     */
    addressLines?: string[];
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region.
     */
    administrativeArea?: string;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known).
     */
    languageCode?: string;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
     */
    locality?: string;
    /**
     * Optional. Postal code of the address.
     */
    postalCode?: string;
    /**
     * Required. CLDR region code of the country/region of the address.
     */
    regionCode?: string;
    /**
     * Optional. Sublocality of the address.
     */
    sublocality?: string;
}
