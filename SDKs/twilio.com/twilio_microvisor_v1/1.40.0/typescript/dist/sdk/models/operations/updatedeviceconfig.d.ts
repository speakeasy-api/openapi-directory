import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeviceConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateDeviceConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeviceConfigUpdateDeviceConfigRequest extends SpeakeasyBase {
    /**
     * The config value; up to 4096 characters.
     */
    value: string;
}
export declare class UpdateDeviceConfigRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The config key; up to 100 characters.
     */
    key: string;
    requestBody?: UpdateDeviceConfigUpdateDeviceConfigRequest;
}
export declare class UpdateDeviceConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1DeviceDeviceConfig?: shared.MicrovisorV1DeviceDeviceConfig;
}
