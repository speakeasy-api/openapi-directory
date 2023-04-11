import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PartnerCustomerCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    partnerCustomerCreateResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
