import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceTypesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device type.
     */
    id: number;
}
export declare class DcimDeviceTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
