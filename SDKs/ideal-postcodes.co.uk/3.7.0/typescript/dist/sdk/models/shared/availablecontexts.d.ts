import { SpeakeasyBase } from "../../../internal/utils";
export declare class AvailableContexts extends SpeakeasyBase {
    /**
     * Country descriptor to show in Address Finder
     *
     * @remarks
     *
     */
    description: string;
    /**
     * Emoji text icon
     */
    emoji: string;
    /**
     * 2 letter ISO code
     */
    iso2: string;
    /**
     * 3 letter ISO code
     */
    iso3: string;
    /**
     * Indicates availability of reverse geolocation search
     *
     * @remarks
     *
     */
    rgeo: boolean;
}
