import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetTagsQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    pathParams: GetTagsPathParams;
    queryParams: GetTagsQueryParams;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    tags?: shared.Tag[];
}
