import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeConnectionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetMeConnectionsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeConnectionsRequest extends SpeakeasyBase {
    queryParams: GetMeConnectionsQueryParams;
    security: GetMeConnectionsSecurity;
}
export declare class GetMeConnectionsResponse extends SpeakeasyBase {
    connections?: shared.Connection[];
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
