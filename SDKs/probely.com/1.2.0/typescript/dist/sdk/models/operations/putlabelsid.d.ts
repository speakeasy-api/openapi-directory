import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLabelsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutLabelsId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutLabelsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutLabelsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutLabelsIdRequest extends SpeakeasyBase {
    pathParams: PutLabelsIdPathParams;
    request: shared.LabelInput;
}
export declare class PutLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
    putLabelsId400ApplicationJSONObject?: PutLabelsId400ApplicationJson;
    putLabelsId401ApplicationJSONObject?: PutLabelsId401ApplicationJson;
    putLabelsId404ApplicationJSONObject?: PutLabelsId404ApplicationJson;
}
