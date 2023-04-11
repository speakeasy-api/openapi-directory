import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectReference } from "./projectreference";
export declare class ProjectListProjects extends SpeakeasyBase {
    /**
     * A descriptive name for this project.
     */
    friendlyName?: string;
    /**
     * An opaque ID of this project.
     */
    id?: string;
    /**
     * The resource type.
     */
    kind?: string;
    /**
     * The numeric ID of this project.
     */
    numericId?: string;
    projectReference?: ProjectReference;
}
/**
 * Successful response
 */
export declare class ProjectList extends SpeakeasyBase {
    /**
     * A hash of the page of results
     */
    etag?: string;
    /**
     * The type of list.
     */
    kind?: string;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
    /**
     * Projects to which you have at least READ access.
     */
    projects?: ProjectListProjects[];
    /**
     * The total number of projects in the list.
     */
    totalItems?: number;
}
