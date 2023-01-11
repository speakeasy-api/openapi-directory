import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class PublishIterationQueryParams extends SpeakeasyBase {
    predictionId: string;
    publishName: string;
}
export declare class PublishIterationRequest extends SpeakeasyBase {
    pathParams: PublishIterationPathParams;
    queryParams: PublishIterationQueryParams;
}
export declare class PublishIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    publishIteration200ApplicationJSONBoolean?: boolean;
    statusCode: number;
}
