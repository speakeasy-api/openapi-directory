import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPostLocations200ApplicationJSON extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    /**
     * The location name used when submitting new posts.
     */
    name?: string;
}
export declare class GetPostLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The current users' post locations.
     */
    getPostLocations200ApplicationJSONObjects?: GetPostLocations200ApplicationJSON[];
}
