import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DevicesPostJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    deviceToPost?: shared.DeviceToPost;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
