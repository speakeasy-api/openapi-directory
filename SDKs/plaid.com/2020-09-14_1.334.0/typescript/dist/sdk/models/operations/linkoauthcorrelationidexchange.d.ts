import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LinkOauthCorrelationIdExchangeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    linkOAuthCorrelationIdExchangeResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
