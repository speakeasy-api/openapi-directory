import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchTargetsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsIdRequest extends SpeakeasyBase {
    pathParams: PatchTargetsIdPathParams;
    request?: shared.TargetInput;
}
export declare class PatchTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    target?: shared.Target;
    patchTargetsId400ApplicationJSONObject?: PatchTargetsId400ApplicationJson;
    patchTargetsId401ApplicationJSONObject?: PatchTargetsId401ApplicationJson;
    patchTargetsId403ApplicationJSONObject?: PatchTargetsId403ApplicationJson;
    patchTargetsId404ApplicationJSONObject?: PatchTargetsId404ApplicationJson;
}
