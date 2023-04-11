import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditRelayRefreshResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditRelayRefreshResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
