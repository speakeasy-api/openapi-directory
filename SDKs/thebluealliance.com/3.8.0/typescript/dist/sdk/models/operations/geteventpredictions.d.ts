import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPredictionsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventPredictionsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventPredictionsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventPredictionsRequest extends SpeakeasyBase {
    pathParams: GetEventPredictionsPathParams;
    headers: GetEventPredictionsHeaders;
    security: GetEventPredictionsSecurity;
}
export declare class GetEventPredictionsResponse extends SpeakeasyBase {
    contentType: string;
    eventPredictions?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
