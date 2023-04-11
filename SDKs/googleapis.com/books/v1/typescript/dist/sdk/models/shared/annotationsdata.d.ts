import { SpeakeasyBase } from "../../../internal/utils";
import { GeoAnnotationdata } from "./geoannotationdata";
/**
 * Successful response
 */
export declare class Annotationsdata extends SpeakeasyBase {
    /**
     * A list of Annotation Data.
     */
    items?: GeoAnnotationdata[];
    /**
     * Resource type
     */
    kind?: string;
    /**
     * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
     */
    nextPageToken?: string;
    /**
     * The total number of volume annotations found.
     */
    totalItems?: number;
}
