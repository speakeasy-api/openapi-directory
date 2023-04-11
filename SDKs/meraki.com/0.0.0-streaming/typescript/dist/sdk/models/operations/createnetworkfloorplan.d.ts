import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
 */
export declare class CreateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
/**
 * The longitude and latitude of the bottom right corner of your floor plan.
 */
export declare class CreateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
/**
 * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
 */
export declare class CreateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
/**
 * The longitude and latitude of the top left corner of your floor plan.
 */
export declare class CreateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
/**
 * The longitude and latitude of the top right corner of your floor plan.
 */
export declare class CreateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
export declare class CreateNetworkFloorPlanRequestBody extends SpeakeasyBase {
    /**
     * The longitude and latitude of the bottom left corner of your floor plan.
     */
    bottomLeftCorner?: CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
    /**
     * The longitude and latitude of the bottom right corner of your floor plan.
     */
    bottomRightCorner?: CreateNetworkFloorPlanRequestBodyBottomRightCorner;
    /**
     * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
     */
    center?: CreateNetworkFloorPlanRequestBodyCenter;
    /**
     * The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
     */
    imageContents: string;
    /**
     * The name of your floor plan.
     */
    name: string;
    /**
     * The longitude and latitude of the top left corner of your floor plan.
     */
    topLeftCorner?: CreateNetworkFloorPlanRequestBodyTopLeftCorner;
    /**
     * The longitude and latitude of the top right corner of your floor plan.
     */
    topRightCorner?: CreateNetworkFloorPlanRequestBodyTopRightCorner;
}
export declare class CreateNetworkFloorPlanRequest extends SpeakeasyBase {
    requestBody: CreateNetworkFloorPlanRequestBody;
    networkId: string;
}
export declare class CreateNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkFloorPlan201ApplicationJSONObject?: Record<string, any>;
}
