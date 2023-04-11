import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
 */
export declare class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
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
export declare class UpdateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
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
 * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
 */
export declare class UpdateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
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
export declare class UpdateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
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
export declare class UpdateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lng?: number;
}
export declare class UpdateNetworkFloorPlanRequestBody extends SpeakeasyBase {
    /**
     * The longitude and latitude of the bottom left corner of your floor plan.
     */
    bottomLeftCorner?: UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
    /**
     * The longitude and latitude of the bottom right corner of your floor plan.
     */
    bottomRightCorner?: UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
    /**
     * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
     */
    center?: UpdateNetworkFloorPlanRequestBodyCenter;
    /**
     * The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.
     */
    imageContents?: string;
    /**
     * The name of your floor plan.
     */
    name?: string;
    /**
     * The longitude and latitude of the top left corner of your floor plan.
     */
    topLeftCorner?: UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
    /**
     * The longitude and latitude of the top right corner of your floor plan.
     */
    topRightCorner?: UpdateNetworkFloorPlanRequestBodyTopRightCorner;
}
export declare class UpdateNetworkFloorPlanRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkFloorPlanRequestBody;
    floorPlanId: string;
    networkId: string;
}
export declare class UpdateNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkFloorPlan200ApplicationJSONObject?: Record<string, any>;
}
