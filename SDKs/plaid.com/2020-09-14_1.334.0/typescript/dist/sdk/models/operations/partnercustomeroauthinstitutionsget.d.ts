import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PartnerCustomerOauthInstitutionsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    partnerCustomerOAuthInstitutionsGetResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
