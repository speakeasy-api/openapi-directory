import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLabelsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteLabelsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteLabelsIdRequest extends SpeakeasyBase {
    pathParams: DeleteLabelsIdPathParams;
}
export declare class DeleteLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLabelsId401ApplicationJSONObject?: DeleteLabelsId401ApplicationJson;
}
