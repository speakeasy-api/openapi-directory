import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataAttributeBinding } from "./googleclouddataplexv1dataattributebinding";
/**
 * List DataAttributeBindings response.
 */
export declare class GoogleCloudDataplexV1ListDataAttributeBindingsResponse extends SpeakeasyBase {
    /**
     * DataAttributeBindings under the given parent Location.
     */
    dataAttributeBindings?: GoogleCloudDataplexV1DataAttributeBinding[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
