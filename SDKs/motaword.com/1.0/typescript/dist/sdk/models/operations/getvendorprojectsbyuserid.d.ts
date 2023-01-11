import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVendorProjectsByUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetVendorProjectsByUserIdQueryParams extends SpeakeasyBase {
    completed?: boolean;
    joined?: boolean;
    page?: number;
    perPage?: number;
}
export declare class GetVendorProjectsByUserIdRequest extends SpeakeasyBase {
    pathParams: GetVendorProjectsByUserIdPathParams;
    queryParams: GetVendorProjectsByUserIdQueryParams;
}
export declare class GetVendorProjectsByUserIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    projectList?: shared.ProjectList;
    statusCode: number;
}
