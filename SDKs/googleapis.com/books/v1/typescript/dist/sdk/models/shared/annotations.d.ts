import { SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
/**
 * Successful response
 */
export declare class Annotations extends SpeakeasyBase {
    /**
     * A list of annotations.
     */
    items?: Annotation[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
     */
    nextPageToken?: string;
    /**
     * Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.
     */
    totalItems?: number;
}
