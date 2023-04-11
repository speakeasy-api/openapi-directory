import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProjectsOrderByEnum {
    Id = "id",
    Status = "status",
    Delivery = "delivery",
    Price = "price"
}
export declare enum GetProjectsWithEnum {
    Client = "client",
    Vendor = "vendor"
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    orderBy?: GetProjectsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    /**
     * Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'
     */
    status?: shared.ProjectStatusEnum[];
    /**
     * Include detailed information. Possible values 'client', 'vendor'
     */
    with?: GetProjectsWithEnum[];
    /**
     * deprecated. use `status[]` param.
     */
    withCompleted?: boolean;
    /**
     * deprecated. use `status[]` param.
     */
    withPending?: boolean;
    /**
     * deprecated. use `status[]` param.
     */
    withStarted?: boolean;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Project list
     */
    projectList?: shared.ProjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
