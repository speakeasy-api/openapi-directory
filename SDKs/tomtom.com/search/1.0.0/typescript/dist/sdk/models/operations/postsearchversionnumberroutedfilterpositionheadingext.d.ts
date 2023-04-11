import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress extends SpeakeasyBase {
    freeformAddress?: string;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi extends SpeakeasyBase {
    name?: string;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition extends SpeakeasyBase {
    lat?: number;
    lon?: number;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList extends SpeakeasyBase {
    address?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;
    poi?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;
    position?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody extends SpeakeasyBase {
    poiList?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[];
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
    requestBody?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    heading: number;
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
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
