import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesNapalmRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device.
     */
    id: number;
    method: string;
}
export declare class DcimDevicesNapalmResponse extends SpeakeasyBase {
    contentType: string;
    deviceNAPALM?: shared.DeviceNAPALM;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
