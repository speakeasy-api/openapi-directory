import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesPartialUpdateRequest extends SpeakeasyBase {
    writableDeviceWithConfigContextInput: shared.WritableDeviceWithConfigContextInput;
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
