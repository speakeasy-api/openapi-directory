import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesUpdateRequest extends SpeakeasyBase {
    writableDeviceInput: shared.WritableDeviceInput;
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
