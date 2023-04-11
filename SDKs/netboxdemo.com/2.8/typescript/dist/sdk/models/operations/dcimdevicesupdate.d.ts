import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesUpdateRequest extends SpeakeasyBase {
    writableDeviceWithConfigContextInput: shared.WritableDeviceWithConfigContextInput;
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
