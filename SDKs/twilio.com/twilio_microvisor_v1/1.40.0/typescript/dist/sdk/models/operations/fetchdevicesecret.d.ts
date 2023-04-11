import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeviceSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchDeviceSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeviceSecretRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
}
export declare class FetchDeviceSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1DeviceDeviceSecret?: shared.MicrovisorV1DeviceDeviceSecret;
}
