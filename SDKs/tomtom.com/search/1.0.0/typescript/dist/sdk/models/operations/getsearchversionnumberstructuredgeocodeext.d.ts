import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberStructuredGeocodeExtRequest extends SpeakeasyBase {
    /**
     * 2 or 3 letter country code (e.g.: FR, ES).
     */
    countryCode: string;
    /**
     * The county for the structured address.
     */
    countrySecondarySubdivision?: string;
    /**
     * The state or province for the structured address.
     */
    countrySubdivision?: string;
    /**
     * The named area for the structured address.
     */
    countryTertiarySubdivision?: string;
    /**
     * The cross street name for the structured address.
     */
    crossStreet?: string;
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * Indexes for which extended postal codes should be included in the results. Available indexes are:
     *
     * @remarks
     *   - <b>Addr</b> = Address ranges
     *   - <b>Geo</b> = Geographies
     *   - <b>PAD</b> = Point Addresses
     *   - <b>POI</b> = Points of Interest
     *   - <b>Str</b> = Streets
     *   - <b>XStr</b> = Cross Streets (intersections)
     */
    extendedPostalCodesFor?: string;
    /**
     * Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
     */
    language?: string;
    /**
     * Maximum number of search results that will be returned.
     */
    limit?: number;
    /**
     * The municipality (city/town) for the structured address.
     */
    municipality?: string;
    /**
     * The municipality subdivision (sub/super city) for the structured address.
     */
    municipalitySubdivision?: string;
    /**
     * Starting offset of the returned results within the full result set.
     */
    ofs?: number;
    /**
     * The zip code or postal code for the structured address.
     */
    postalCode?: string;
    /**
     * The street name for the structured address.
     */
    streetName?: string;
    /**
     * The street number for the structured address.
     */
    streetNumber?: string;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberStructuredGeocodeExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
