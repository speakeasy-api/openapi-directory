import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
    dateTime: Date;
    recurrence?: shared.RecurrenceEnum;
}
export declare class PutTargetsTargetIdScheduledscansId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdScheduledscansId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdScheduledscansIdPathParams;
    request: PutTargetsTargetIdScheduledscansIdRequestBody;
}
export declare class PutTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduled?: shared.Scheduled;
    statusCode: number;
    putTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId400ApplicationJson;
    putTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId401ApplicationJson;
    putTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId403ApplicationJson;
    putTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId404ApplicationJson;
}
