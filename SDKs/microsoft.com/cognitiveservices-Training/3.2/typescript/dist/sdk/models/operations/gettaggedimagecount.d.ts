import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaggedImageCountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetTaggedImageCountQueryParams extends SpeakeasyBase {
    iterationId?: string;
    tagIds?: string[];
}
export declare class GetTaggedImageCountRequest extends SpeakeasyBase {
    pathParams: GetTaggedImageCountPathParams;
    queryParams: GetTaggedImageCountQueryParams;
}
export declare class GetTaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    getTaggedImageCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
}
