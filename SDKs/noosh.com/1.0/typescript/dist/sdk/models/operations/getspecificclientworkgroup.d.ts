import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecificClientWorkgroupRequest extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetSpecificClientWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Successful retrieval
     */
    clientWorkgroupExpandVO?: shared.ClientWorkgroupExpandVO;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
