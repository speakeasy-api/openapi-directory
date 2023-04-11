import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeviceConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteDeviceConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeviceConfigRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The config key; up to 100 characters.
     */
    key: string;
}
export declare class DeleteDeviceConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
