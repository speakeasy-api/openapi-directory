import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeployedDevicesDeviceRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Device resource.
     */
    sid: string;
}
export declare class DeleteDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
