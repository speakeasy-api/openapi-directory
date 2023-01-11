import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVendorProjectsQueryParams extends SpeakeasyBase {
    completed?: boolean;
    joined?: boolean;
    page?: number;
    perPage?: number;
}
export declare class GetVendorProjectsRequest extends SpeakeasyBase {
    queryParams: GetVendorProjectsQueryParams;
}
export declare class GetVendorProjectsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    projectList?: shared.ProjectList;
    statusCode: number;
}
