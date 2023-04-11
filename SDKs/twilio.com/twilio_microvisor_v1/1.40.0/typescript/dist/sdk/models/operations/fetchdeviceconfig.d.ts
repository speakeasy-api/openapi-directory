import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeviceConfigServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchDeviceConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeviceConfigRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The config key; up to 100 characters.
     */
    key: string;
}
export declare class FetchDeviceConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1DeviceDeviceConfig?: shared.MicrovisorV1DeviceDeviceConfig;
}
