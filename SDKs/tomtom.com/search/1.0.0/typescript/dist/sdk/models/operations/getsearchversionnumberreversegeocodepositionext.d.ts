import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberReverseGeocodePositionExtRequest extends SpeakeasyBase {
    /**
     * Specifies the jsonp callback method.
     */
    callback?: string;
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    heading?: number;
    /**
     * If a number is sent in along with the request, the response may include the side of the street (Left/Right) and an offset position for that number.
     */
    number?: string;
    /**
     * This is specified as a comma separated string composed of lat., lon.
     */
    position: string;
    /**
     * The maximum distance in meters from the specified position for the reverse geocoder to consider.
     */
    radius?: number;
    /**
     * Enables return of the road use array for reverse geocodes at street level.
     */
    returnRoadUse?: boolean;
    /**
     * To enable return of the posted speed limit (where available).
     */
    returnSpeedLimit?: boolean;
    /**
     * Restricts reverse geocodes to a certain type of road use. The road use array for reverse geocodes can be one or more of: ["LimitedAccess", "Arterial", "Terminal", "Ramp", "Rotary", "LocalStreet"].
     */
    roadUse?: string;
    /**
     * If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
     */
    spatialKeys?: boolean;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberReverseGeocodePositionExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
