import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientWorkgroupListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetClientWorkgroupListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Successful retrieval
     */
    clientWorkgroupListVO?: shared.ClientWorkgroupListVO;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
