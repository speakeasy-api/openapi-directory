import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBaysDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device bay.
     */
    id: number;
}
export declare class DcimDeviceBaysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
