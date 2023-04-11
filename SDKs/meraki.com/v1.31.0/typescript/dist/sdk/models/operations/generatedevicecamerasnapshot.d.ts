import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GenerateDeviceCameraSnapshotRequestBody extends SpeakeasyBase {
    /**
     * [optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.
     */
    fullframe?: boolean;
    /**
     * [optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.
     */
    timestamp?: Date;
}
export declare class GenerateDeviceCameraSnapshotRequest extends SpeakeasyBase {
    requestBody?: GenerateDeviceCameraSnapshotRequestBody;
    serial: string;
}
export declare class GenerateDeviceCameraSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    generateDeviceCameraSnapshot202ApplicationJSONObject?: Record<string, any>;
}
