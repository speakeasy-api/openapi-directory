import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDevicesIdRequest extends SpeakeasyBase {
    device: shared.Device;
    id: number;
}
export declare class PutDevicesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
