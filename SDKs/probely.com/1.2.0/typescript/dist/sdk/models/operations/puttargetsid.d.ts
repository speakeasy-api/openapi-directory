import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTargetsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsIdRequest extends SpeakeasyBase {
    pathParams: PutTargetsIdPathParams;
    request?: shared.TargetInput;
}
export declare class PutTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    target?: shared.Target;
    putTargetsId400ApplicationJSONObject?: PutTargetsId400ApplicationJson;
    putTargetsId401ApplicationJSONObject?: PutTargetsId401ApplicationJson;
    putTargetsId403ApplicationJSONObject?: PutTargetsId403ApplicationJson;
    putTargetsId404ApplicationJSONObject?: PutTargetsId404ApplicationJson;
}
