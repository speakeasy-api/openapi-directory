import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBayTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device bay template.
     */
    id: number;
}
export declare class DcimDeviceBayTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
