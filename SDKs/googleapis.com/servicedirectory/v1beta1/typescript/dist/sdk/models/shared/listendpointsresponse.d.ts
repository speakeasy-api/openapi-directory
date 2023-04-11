import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * The response message for RegistrationService.ListEndpoints.
 */
export declare class ListEndpointsResponse extends SpeakeasyBase {
    /**
     * The list of endpoints.
     */
    endpoints?: Endpoint[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
