import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRfeRequest extends SpeakeasyBase {
    projectId: string;
    rfeId: string;
    workgroupId: string;
}
export declare class GetRfeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    rfeExpandVO?: shared.RfeExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
