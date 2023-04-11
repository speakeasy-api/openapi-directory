import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SignalPrepareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    signalPrepareResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
