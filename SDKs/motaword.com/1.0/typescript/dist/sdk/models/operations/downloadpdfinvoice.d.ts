import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadPdfInvoicePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DownloadPdfInvoiceRequest extends SpeakeasyBase {
    pathParams: DownloadPdfInvoicePathParams;
}
export declare class DownloadPdfInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadPdfInvoice200ApplicationPdfBinaryString?: Uint8Array;
}
