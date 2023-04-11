import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeviceBySerialGetRequest extends SpeakeasyBase {
    /**
     * The Serial Number of the device
     */
    serial: number;
}
export declare class DeviceBySerialGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
