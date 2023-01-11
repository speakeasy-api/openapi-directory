import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagePerformanceCountPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class GetImagePerformanceCountQueryParams extends SpeakeasyBase {
    tagIds?: string[];
}
export declare class GetImagePerformanceCountRequest extends SpeakeasyBase {
    pathParams: GetImagePerformanceCountPathParams;
    queryParams: GetImagePerformanceCountQueryParams;
}
export declare class GetImagePerformanceCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    getImagePerformanceCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
}
