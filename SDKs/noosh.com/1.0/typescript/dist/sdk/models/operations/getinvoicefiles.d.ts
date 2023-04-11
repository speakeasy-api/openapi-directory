import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvoiceFilesRequest extends SpeakeasyBase {
    invoiceId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetInvoiceFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful retrieval
     */
    fileListResponseVO?: shared.FileListResponseVO;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
