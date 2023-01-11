import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTasksQueryParams extends SpeakeasyBase {
    filter?: Record<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Record<string, any>;
}
export declare class ListTasksRequest extends SpeakeasyBase {
    queryParams: ListTasksQueryParams;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasksCollection?: shared.TasksCollection;
}
