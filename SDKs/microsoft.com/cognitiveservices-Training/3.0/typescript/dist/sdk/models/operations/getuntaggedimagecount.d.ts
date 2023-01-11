import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUntaggedImageCountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetUntaggedImageCountQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class GetUntaggedImageCountHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetUntaggedImageCountRequest extends SpeakeasyBase {
    pathParams: GetUntaggedImageCountPathParams;
    queryParams: GetUntaggedImageCountQueryParams;
    headers: GetUntaggedImageCountHeaders;
}
export declare class GetUntaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    getUntaggedImageCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
}
