import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetInvoicePathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetInvoiceQueryParams extends SpeakeasyBase {
    invoiceID: string;
    token: string;
}
export declare class LandlordControllerGetInvoiceRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetInvoicePathParams;
    queryParams: LandlordControllerGetInvoiceQueryParams;
}
export declare class LandlordControllerGetInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Record<string, any>;
    statusCode: number;
}
