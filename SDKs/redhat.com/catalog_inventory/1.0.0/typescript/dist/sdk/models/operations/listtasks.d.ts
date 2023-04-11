import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTasksRequest extends SpeakeasyBase {
    /**
     * Filter for querying collections.
     */
    filter?: Record<string, any>;
    /**
     * The numbers of items to return per page.
     */
    limit?: number;
    /**
     * The number of items to skip before starting to collect the result set.
     */
    offset?: number;
    /**
     * The list of attribute and order to sort the result set by.
     */
    sortBy?: Record<string, any>;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tasks collection
     */
    tasksCollection?: shared.TasksCollection;
}
