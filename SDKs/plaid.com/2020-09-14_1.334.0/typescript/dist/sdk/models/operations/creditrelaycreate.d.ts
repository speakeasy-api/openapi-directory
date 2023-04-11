import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditRelayCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditRelayCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
