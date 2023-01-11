import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchLabelsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchLabelsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchLabelsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchLabelsIdRequest extends SpeakeasyBase {
    pathParams: PatchLabelsIdPathParams;
    request: shared.LabelInput;
}
export declare class PatchLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
    patchLabelsId401ApplicationJSONObject?: PatchLabelsId401ApplicationJson;
    patchLabelsId404ApplicationJSONObject?: PatchLabelsId404ApplicationJson;
}
