import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LinkDeliveryCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    linkDeliveryCreateResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
