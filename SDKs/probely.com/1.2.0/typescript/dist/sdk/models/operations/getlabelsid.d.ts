import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLabelsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetLabelsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetLabelsIdRequest extends SpeakeasyBase {
    pathParams: GetLabelsIdPathParams;
}
export declare class GetLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    label?: shared.Label;
    statusCode: number;
    getLabelsId401ApplicationJSONObject?: GetLabelsId401ApplicationJson;
    getLabelsId404ApplicationJSONObject?: GetLabelsId404ApplicationJson;
}
