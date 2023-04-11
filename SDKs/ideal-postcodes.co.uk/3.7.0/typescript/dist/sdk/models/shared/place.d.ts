import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
/**
 * Indicates the provenance of a place.
 *
 * @remarks
 *
 *   - `geonames` GeoNames place
 */
export declare enum PlaceDatasetEnum {
    Geonames = "geonames"
}
/**
 * Represents a geographical place
 */
export declare class Place extends SpeakeasyBase {
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: string;
    /**
     * Indicates the provenance of a place.
     *
     * @remarks
     *
     *   - `geonames` GeoNames place
     */
    dataset: PlaceDatasetEnum;
    /**
     * Longer form description of the place.
     *
     * @remarks
     *
     */
    descriptiveName: string;
    /**
     * Global unique internally generated identifier for a place
     */
    id: string;
    /**
     * Language represented by 2 letter ISO Code (639-1)
     *
     * @remarks
     *
     */
    language: LanguageEnum;
    /**
     * The latitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. `51.5083983`.
     *
     * Returns an empty string if no location data is available.
     */
    latitude: any;
    /**
     * The longitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. -0.1283983
     *
     * Returns an empty string if no location data is available.
     */
    longitude: any;
    /**
     * Place name
     *
     * @remarks
     *
     */
    name: string;
    /**
     * Native representation of a place
     */
    native?: any;
}
