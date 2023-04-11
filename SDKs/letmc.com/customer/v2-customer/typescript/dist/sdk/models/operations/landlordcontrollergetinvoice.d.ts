import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetInvoiceRequest extends SpeakeasyBase {
    /**
     * The invoice ID to load.
     */
    invoiceID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
