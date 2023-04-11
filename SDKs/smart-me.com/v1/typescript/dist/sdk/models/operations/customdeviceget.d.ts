import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomDeviceGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    customDeviceToPosts?: shared.CustomDeviceToPost[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
