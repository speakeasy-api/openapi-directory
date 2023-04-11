import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Location } from "./location";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the __ListLocations__ endpoint.
 *
 * One of `errors` or `locations` is present in a given response (never both).
 */
export declare class ListLocationsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The business locations.
     */
    locations?: Location[];
}
