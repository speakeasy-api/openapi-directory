import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest extends SpeakeasyBase {
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    heading?: number;
    /**
     * Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
     */
    language?: string;
    /**
     * Maximum number of cross-streets to return.
     */
    limit?: number;
    /**
     * This is specified as a comma separated string composed of lat., lon.
     */
    position: string;
    /**
     * The maximum distance in meters from the specified position for the reverse geocoder to consider.
     */
    radius?: number;
    /**
     * If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
     */
    spatialKeys?: boolean;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
