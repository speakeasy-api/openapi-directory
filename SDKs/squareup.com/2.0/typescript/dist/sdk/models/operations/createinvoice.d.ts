import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createInvoiceResponse?: shared.CreateInvoiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
