import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    heading: number;
    /**
     * List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.
     */
    poiList: string;
    /**
     * This is specified as a comma separated string composed of lat., lon.
     */
    position: string;
    /**
     * Only return results that arrive from routing engine within this time limit.
     */
    routingTimeout?: number;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
