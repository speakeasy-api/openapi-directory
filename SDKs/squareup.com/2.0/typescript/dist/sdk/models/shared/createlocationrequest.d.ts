import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Request object for the [CreateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/create-location) endpoint.
 */
export declare class CreateLocationRequest extends SpeakeasyBase {
    location?: Location;
}
