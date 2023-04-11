import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PartnerCustomerEnableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    partnerCustomerEnableResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
