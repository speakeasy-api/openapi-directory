import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters the project cards that are returned by the card's state.
 */
export declare enum ProjectsListCardsArchivedStateEnum {
    All = "all",
    Archived = "archived",
    NotArchived = "not_archived"
}
export declare class ProjectsListCardsRequest extends SpeakeasyBase {
    /**
     * Filters the project cards that are returned by the card's state.
     */
    archivedState?: ProjectsListCardsArchivedStateEnum;
    /**
     * The unique identifier of the column.
     */
    columnId: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class ProjectsListCardsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    projectCards?: shared.ProjectCard[];
}
