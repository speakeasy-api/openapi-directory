import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Location } from "./location";
/**
 * Defines the fields that the
 *
 * @remarks
 * [RetrieveLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/retrieve-location) endpoint returns
 * in a response.
 */
export declare class RetrieveLocationResponse extends SpeakeasyBase {
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
    location?: Location;
}
