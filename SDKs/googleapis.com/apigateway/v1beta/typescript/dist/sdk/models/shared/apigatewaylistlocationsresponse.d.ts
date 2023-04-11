import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayLocation } from "./apigatewaylocation";
/**
 * The response message for Locations.ListLocations.
 */
export declare class ApigatewayListLocationsResponse extends SpeakeasyBase {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: ApigatewayLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
