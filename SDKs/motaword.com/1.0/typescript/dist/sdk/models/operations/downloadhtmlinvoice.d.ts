import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadHtmlInvoicePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DownloadHtmlInvoiceRequest extends SpeakeasyBase {
    pathParams: DownloadHtmlInvoicePathParams;
}
export declare class DownloadHtmlInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadHTMLInvoice200TextHTMLString?: string;
}
