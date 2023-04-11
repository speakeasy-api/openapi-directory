import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
