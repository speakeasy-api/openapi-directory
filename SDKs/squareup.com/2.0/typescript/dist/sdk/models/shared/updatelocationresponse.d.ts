import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Location } from "./location";
/**
 * Response object returned by the [UpdateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/update-location) endpoint.
 */
export declare class UpdateLocationResponse extends SpeakeasyBase {
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
    location?: Location;
}
