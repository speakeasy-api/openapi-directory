import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeviceConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class CreateDeviceConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeviceConfigCreateDeviceConfigRequest extends SpeakeasyBase {
    /**
     * The config key; up to 100 characters.
     */
    key: string;
    /**
     * The config value; up to 4096 characters.
     */
    value: string;
}
export declare class CreateDeviceConfigRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    requestBody?: CreateDeviceConfigCreateDeviceConfigRequest;
}
export declare class CreateDeviceConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    microvisorV1DeviceDeviceConfig?: shared.MicrovisorV1DeviceDeviceConfig;
}
