import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GeonamesPlaceDatasetEnum {
    Geonames = "geonames"
}
/**
 * GeoNames single letter feature code
 */
export declare enum GeonamesPlaceFeatureClassEnum {
    A = "A",
    H = "H",
    L = "L",
    P = "P",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V"
}
/**
 * Full GeoNames place specification
 */
export declare class GeonamesPlace extends SpeakeasyBase {
    /**
     * Fipscode (subject to change to iso code)
     */
    admin1Code: string;
    /**
     * GeoName ID for first administrative area
     */
    admin1Geonameid: number;
    /**
     * Name of first administrative area
     */
    admin1Name: string;
    /**
     * Code for the second administrative division
     */
    admin2Code: string;
    /**
     * GeoName ID for second administrative area
     */
    admin2Geonameid: number;
    /**
     * Name of second administrative area
     */
    admin2Name: string;
    /**
     * Code for third level administrative division
     */
    admin3Code: string;
    /**
     * Code for fourth level administrative division
     */
    admin4Code: string;
    /**
     * List of alternate ASCII names
     */
    alternatenames: any[];
    /**
     * Place Name (ASCII)
     */
    asciiname: string;
    /**
     * List of other countries codes mapping to this place
     */
    cc2: any[];
    /**
     * 2 Letter ISO country code
     */
    countryCode: string;
    dataset?: GeonamesPlaceDatasetEnum;
    /**
     * Digital elevation model
     */
    dem: number;
    /**
     * Elevation in meters
     */
    elevation: number;
    /**
     * GeoNames single letter feature code
     */
    featureClass: GeonamesPlaceFeatureClassEnum;
    /**
     * Full GeoNames feature code (http://www.geonames.org/export/codes.html)
     */
    featureCode: string;
    /**
     * Unique identifier for GeoNames place
     */
    geonameid: number;
    /**
     * Unique place ID
     */
    id?: string;
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
     * Datetime format
     */
    modificationDate: string;
    /**
     * Place name (UTF8)
     */
    name: string;
    /**
     * Population at place. Represented as string as it could be a larger than a 32bit integer
     */
    population: string;
    /**
     * The IANA timezone ID
     */
    timezone: string;
}
