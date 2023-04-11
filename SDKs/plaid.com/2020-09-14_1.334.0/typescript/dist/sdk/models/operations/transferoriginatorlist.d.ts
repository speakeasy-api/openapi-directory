import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TransferOriginatorListResponse extends SpeakeasyBase {
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
    transferOriginatorListResponse?: Record<string, any>;
}
