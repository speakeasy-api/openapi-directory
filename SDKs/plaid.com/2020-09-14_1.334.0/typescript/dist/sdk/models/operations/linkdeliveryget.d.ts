import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LinkDeliveryGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    linkDeliveryGetResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
