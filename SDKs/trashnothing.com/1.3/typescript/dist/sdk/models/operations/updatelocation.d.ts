import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLocationRequestBody extends SpeakeasyBase {
    latitude: number;
    longitude: number;
    /**
     * A name that describes the location specified by the given latitude and longitude (must be <= 128 characters).
     */
    name: string;
    /**
     * A radius in meters that defines a circle around the point specified by latitude and longitude. Only posts within the area specified by this circle will be shown.
     *
     * @remarks
     * If set to 0, effectively disables public posts for the user.
     *
     */
    radius: number;
}
export declare class UpdateLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The user with the updated location.
     */
    currentUser?: shared.CurrentUser;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
