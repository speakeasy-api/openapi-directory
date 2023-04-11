import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
