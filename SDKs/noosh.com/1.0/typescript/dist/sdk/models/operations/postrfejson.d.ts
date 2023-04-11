import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRfeJsonRequest extends SpeakeasyBase {
    rfePO?: shared.RfePO;
    projectId: string;
    workgroupId: string;
}
export declare class PostRfeJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful update
     */
    rfqVO?: shared.RfqVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
