import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBayTemplatesPartialUpdateRequest extends SpeakeasyBase {
    writableDeviceBayTemplateInput: shared.WritableDeviceBayTemplateInput;
    /**
     * A unique integer value identifying this device bay template.
     */
    id: number;
}
export declare class DcimDeviceBayTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
