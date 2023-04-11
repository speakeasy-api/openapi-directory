import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * Response message for EnvironmentService.ListEnvironments.
 */
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * Environments. Always set.
     */
    environments?: Environment[];
    /**
     * A Execution id Always set.
     */
    executionId?: string;
    /**
     * A History id. Always set.
     */
    historyId?: string;
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch.
     */
    nextPageToken?: string;
    /**
     * A Project id. Always set.
     */
    projectId?: string;
}
