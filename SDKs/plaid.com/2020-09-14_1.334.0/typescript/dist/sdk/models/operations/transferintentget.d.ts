import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TransferIntentGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    transferIntentGetResponse?: Record<string, any>;
}
