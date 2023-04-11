import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeployedDevicesDeviceRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * Provides a 34 character string that uniquely identifies the requested Device resource.
     */
    sid: string;
}
export declare class FetchDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
