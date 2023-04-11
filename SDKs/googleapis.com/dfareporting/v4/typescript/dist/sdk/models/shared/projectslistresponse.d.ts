import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * Project List Response
 */
export declare class ProjectsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Project collection.
     */
    projects?: Project[];
}
