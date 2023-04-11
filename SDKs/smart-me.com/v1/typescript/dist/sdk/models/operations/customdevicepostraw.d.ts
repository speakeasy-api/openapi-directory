import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomDevicePostRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    customDeviceToPost?: shared.CustomDeviceToPost;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
