import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicePathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetInvoiceRequest extends SpeakeasyBase {
    pathParams: GetInvoicePathParams;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    invoice?: shared.Invoice;
    statusCode: number;
}
