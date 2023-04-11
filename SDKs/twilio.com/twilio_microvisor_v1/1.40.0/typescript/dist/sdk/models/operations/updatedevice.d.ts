import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDeviceServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDeviceUpdateDeviceRequest extends SpeakeasyBase {
    /**
     * A Boolean flag specifying whether to enable application logging. Logs will be enabled or extended for 24 hours.
     */
    loggingEnabled?: boolean;
    /**
     * The SID or unique name of the App to be targeted to the Device.
     */
    targetApp?: string;
    /**
     * A unique and addressable name to be assigned to this Device by the developer. It may be used in place of the Device SID.
     */
    uniqueName?: string;
}
export declare class UpdateDeviceRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceUpdateDeviceRequest;
    /**
     * A 34-character string that uniquely identifies this Device.
     */
    sid: string;
}
export declare class UpdateDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1Device?: shared.MicrovisorV1Device;
}
