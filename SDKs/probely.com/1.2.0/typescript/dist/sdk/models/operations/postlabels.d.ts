import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLabels400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostLabels401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostLabelsRequest extends SpeakeasyBase {
    request: shared.LabelInput;
}
export declare class PostLabelsResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
    postLabels400ApplicationJSONObject?: PostLabels400ApplicationJson;
    postLabels401ApplicationJSONObject?: PostLabels401ApplicationJson;
}
