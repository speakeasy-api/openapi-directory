import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SavePostLocationRequestBody extends SpeakeasyBase {
    latitude: number;
    longitude: number;
    /**
     * A name that describes the location specified by the given latitude and longitude (must be >= 2 characters and <= 30 characters).
     */
    name: string;
}
export declare class SavePostLocation200ApplicationJSON extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    /**
     * The location name used when submitting new posts.
     */
    name?: string;
}
export declare class SavePostLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The current users' post locations.
     */
    savePostLocation200ApplicationJSONObjects?: SavePostLocation200ApplicationJSON[];
}
