import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeviceSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateDeviceSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeviceSecretUpdateDeviceSecretRequest extends SpeakeasyBase {
    /**
     * The secret value; up to 4096 characters.
     */
    value: string;
}
export declare class UpdateDeviceSecretRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
    requestBody?: UpdateDeviceSecretUpdateDeviceSecretRequest;
}
export declare class UpdateDeviceSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1DeviceDeviceSecret?: shared.MicrovisorV1DeviceDeviceSecret;
}
