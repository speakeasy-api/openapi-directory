import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectInfo } from "./projectinfo";
/**
 * Successful response
 */
export declare class ListAvailableProjectsResponse extends SpeakeasyBase {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
    /**
     * The list of GCP `Projects` which can have Firebase resources added to them.
     */
    projectInfo?: ProjectInfo[];
}
