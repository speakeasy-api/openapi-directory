import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditRelayRemoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditRelayRemoveResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
