import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesPartialUpdateRequest extends SpeakeasyBase {
    writableDeviceInput: shared.WritableDeviceInput;
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
