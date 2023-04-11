import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimDevicesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device.
     */
    id: number;
}
export declare class DcimDevicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
