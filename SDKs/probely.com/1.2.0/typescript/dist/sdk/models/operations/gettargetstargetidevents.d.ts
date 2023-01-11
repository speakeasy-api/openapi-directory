import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdEventsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdEvents200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Event[];
}
export declare class GetTargetsTargetIdEvents401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEvents403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEvents404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEventsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdEventsPathParams;
}
export declare class GetTargetsTargetIdEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdEvents200ApplicationJSONObject?: GetTargetsTargetIdEvents200ApplicationJson;
    getTargetsTargetIdEvents401ApplicationJSONObject?: GetTargetsTargetIdEvents401ApplicationJson;
    getTargetsTargetIdEvents403ApplicationJSONObject?: GetTargetsTargetIdEvents403ApplicationJson;
    getTargetsTargetIdEvents404ApplicationJSONObject?: GetTargetsTargetIdEvents404ApplicationJson;
}
