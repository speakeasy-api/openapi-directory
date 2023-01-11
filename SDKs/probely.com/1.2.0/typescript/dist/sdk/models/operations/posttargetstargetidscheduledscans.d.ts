import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdScheduledscansPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdScheduledscansRequestBody extends SpeakeasyBase {
    dateTime: Date;
    recurrence?: shared.RecurrenceEnum;
}
export declare class PostTargetsTargetIdScheduledscans400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdScheduledscans401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScheduledscans403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScheduledscans404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdScheduledscansRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdScheduledscansPathParams;
    request: PostTargetsTargetIdScheduledscansRequestBody;
}
export declare class PostTargetsTargetIdScheduledscansResponse extends SpeakeasyBase {
    contentType: string;
    scheduled?: shared.Scheduled;
    statusCode: number;
    postTargetsTargetIdScheduledscans400ApplicationJSONObject?: PostTargetsTargetIdScheduledscans400ApplicationJson;
    postTargetsTargetIdScheduledscans401ApplicationJSONObject?: PostTargetsTargetIdScheduledscans401ApplicationJson;
    postTargetsTargetIdScheduledscans403ApplicationJSONObject?: PostTargetsTargetIdScheduledscans403ApplicationJson;
    postTargetsTargetIdScheduledscans404ApplicationJSONObject?: PostTargetsTargetIdScheduledscans404ApplicationJson;
}
