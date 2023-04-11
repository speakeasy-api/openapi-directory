import { SpeakeasyBase } from "../../../internal/utils";
import { ServicePerimeter } from "./serviceperimeter";
/**
 * A response to `ListServicePerimetersRequest`.
 */
export declare class ListServicePerimetersResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
    /**
     * List of the Service Perimeter instances.
     */
    servicePerimeters?: ServicePerimeter[];
}
