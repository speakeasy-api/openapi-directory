import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BalanceResponse extends SpeakeasyBase {
    /**
     * OK
     */
    balance200TextPlainFloatNumber?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
