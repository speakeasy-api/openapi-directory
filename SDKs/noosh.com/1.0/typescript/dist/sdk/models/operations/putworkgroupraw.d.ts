import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkgroupRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    workgroupId: string;
}
export declare class PutWorkgroupRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful updated
     */
    workgroupHTTPStatusVO?: shared.WorkgroupHTTPStatusVO;
}
