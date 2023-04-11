import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllTasksRequest extends SpeakeasyBase {
    afterEnqueuedAt?: string;
    afterFinishedAt?: string;
    afterStartedAt?: string;
    beforeEnqueuedAt?: string;
    beforeFinishedAt?: string;
    beforeStartedAt?: string;
    canceledBy?: string;
    from?: string;
    indexUids?: string;
    limit?: string;
    statuses?: string;
    types?: string;
    uids?: string;
}
export declare class GetAllTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
