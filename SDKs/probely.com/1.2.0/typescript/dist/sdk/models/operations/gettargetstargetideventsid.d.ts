import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdEventsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdEventsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEventsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEventsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdEventsIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdEventsIdPathParams;
}
export declare class GetTargetsTargetIdEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
    getTargetsTargetIdEventsId401ApplicationJSONObject?: GetTargetsTargetIdEventsId401ApplicationJson;
    getTargetsTargetIdEventsId403ApplicationJSONObject?: GetTargetsTargetIdEventsId403ApplicationJson;
    getTargetsTargetIdEventsId404ApplicationJSONObject?: GetTargetsTargetIdEventsId404ApplicationJson;
}
