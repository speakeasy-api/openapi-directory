import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ApplicationGetResponse extends SpeakeasyBase {
    /**
     * success
     */
    applicationGetResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
