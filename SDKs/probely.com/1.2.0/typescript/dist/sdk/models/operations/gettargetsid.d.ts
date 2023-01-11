import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTargetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsId500ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsIdPathParams;
}
export declare class GetTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    target?: shared.Target;
    getTargetsId401ApplicationJSONObject?: GetTargetsId401ApplicationJson;
    getTargetsId404ApplicationJSONObject?: GetTargetsId404ApplicationJson;
    getTargetsId500ApplicationJSONObject?: GetTargetsId500ApplicationJson;
}
