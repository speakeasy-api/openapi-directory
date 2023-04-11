import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Request object for the [UpdateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/update-location) endpoint.
 */
export declare class UpdateLocationRequest extends SpeakeasyBase {
    location?: Location;
}
