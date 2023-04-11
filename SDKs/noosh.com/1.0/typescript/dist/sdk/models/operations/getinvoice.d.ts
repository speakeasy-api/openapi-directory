import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInvoiceRequest extends SpeakeasyBase {
    invoiceId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    invoiceExpandVO?: shared.InvoiceExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
