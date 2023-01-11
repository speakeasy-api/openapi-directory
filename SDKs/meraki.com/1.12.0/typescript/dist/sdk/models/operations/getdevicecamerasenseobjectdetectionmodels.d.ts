import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraSenseObjectDetectionModelsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraSenseObjectDetectionModelsRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraSenseObjectDetectionModelsPathParams;
}
export declare class GetDeviceCameraSenseObjectDetectionModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObject?: Record<string, any>;
}
