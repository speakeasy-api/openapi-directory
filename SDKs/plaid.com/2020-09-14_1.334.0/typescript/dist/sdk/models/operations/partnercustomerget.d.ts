import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PartnerCustomerGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    partnerCustomerGetResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
