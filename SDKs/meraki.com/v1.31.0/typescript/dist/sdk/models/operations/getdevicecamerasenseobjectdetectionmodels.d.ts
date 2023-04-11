import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraSenseObjectDetectionModelsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraSenseObjectDetectionModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects?: Record<string, any>[];
}
