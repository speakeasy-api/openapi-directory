import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRfqRequest extends SpeakeasyBase {
    projectId: string;
    rfqId: string;
    workgroupId: string;
}
export declare class GetRfqResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    rfqExpandVO?: shared.RfqExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
