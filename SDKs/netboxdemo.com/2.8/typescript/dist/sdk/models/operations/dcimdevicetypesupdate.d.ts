import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceTypesUpdateRequest extends SpeakeasyBase {
    writableDeviceTypeInput: shared.WritableDeviceTypeInput;
    /**
     * A unique integer value identifying this device type.
     */
    id: number;
}
export declare class DcimDeviceTypesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
