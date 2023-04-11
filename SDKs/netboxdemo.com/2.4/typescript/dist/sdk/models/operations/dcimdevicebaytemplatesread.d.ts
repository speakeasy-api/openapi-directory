import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBayTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device bay template.
     */
    id: number;
}
export declare class DcimDeviceBayTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
