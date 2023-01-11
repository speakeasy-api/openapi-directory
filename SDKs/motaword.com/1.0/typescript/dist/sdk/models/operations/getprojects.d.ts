import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProjectsOrderByEnum {
    Id = "id",
    Status = "status",
    Delivery = "delivery",
    Price = "price"
}
export declare class GetProjectsQueryParams extends SpeakeasyBase {
    orderBy?: GetProjectsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    status?: shared.ProjectStatusEnum[];
    withCompleted?: boolean;
    withPending?: boolean;
    withStarted?: boolean;
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    queryParams: GetProjectsQueryParams;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    projectList?: shared.ProjectList;
    statusCode: number;
}
