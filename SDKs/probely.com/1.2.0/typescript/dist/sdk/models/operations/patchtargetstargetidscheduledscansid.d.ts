import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
    dateTime: Date;
    recurrence?: shared.RecurrenceEnum;
}
export declare class PatchTargetsTargetIdScheduledscansId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdScheduledscansId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdScheduledscansIdPathParams;
    request: PatchTargetsTargetIdScheduledscansIdRequestBody;
}
export declare class PatchTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduled?: shared.Scheduled;
    statusCode: number;
    patchTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId400ApplicationJson;
    patchTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId401ApplicationJson;
    patchTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId403ApplicationJson;
    patchTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId404ApplicationJson;
}
