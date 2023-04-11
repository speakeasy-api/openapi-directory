import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimDeviceTypesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device type.
     */
    id: number;
}
export declare class DcimDeviceTypesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
