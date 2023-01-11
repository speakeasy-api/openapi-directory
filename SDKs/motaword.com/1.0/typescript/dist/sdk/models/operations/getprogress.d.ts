import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgressPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProgressQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class GetProgressRequest extends SpeakeasyBase {
    pathParams: GetProgressPathParams;
    queryParams: GetProgressQueryParams;
}
export declare class GetProgressResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    progress?: shared.Progress;
    statusCode: number;
}
