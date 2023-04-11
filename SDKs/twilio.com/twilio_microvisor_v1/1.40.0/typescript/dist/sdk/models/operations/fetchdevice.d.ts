import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeviceServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeviceRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies this Device.
     */
    sid: string;
}
export declare class FetchDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1Device?: shared.MicrovisorV1Device;
}
