import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDeviceSecretServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteDeviceSecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDeviceSecretRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies the Device.
     */
    deviceSid: string;
    /**
     * The secret key; up to 100 characters.
     */
    key: string;
}
export declare class DeleteDeviceSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
