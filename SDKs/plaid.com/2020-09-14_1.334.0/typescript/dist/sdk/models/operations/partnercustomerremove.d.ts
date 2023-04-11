import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PartnerCustomerRemoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    partnerCustomerRemoveResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
