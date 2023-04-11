import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeviceSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class CreateDeviceSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeviceSecretCreateDeviceSecretRequest extends SpeakeasyBase {
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
    /**
     * The secret value; up to 4096 characters.
     */
    value: string;
}
export declare class CreateDeviceSecretRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    requestBody?: CreateDeviceSecretCreateDeviceSecretRequest;
}
export declare class CreateDeviceSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    microvisorV1DeviceDeviceSecret?: shared.MicrovisorV1DeviceDeviceSecret;
}
