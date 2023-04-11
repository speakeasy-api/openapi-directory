import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBaysUpdateRequest extends SpeakeasyBase {
    writableDeviceBayInput: shared.WritableDeviceBayInput;
    /**
     * A unique integer value identifying this device bay.
     */
    id: number;
}
export declare class DcimDeviceBaysUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBay?: shared.DeviceBay;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
