import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DepositSwitchTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    depositSwitchTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
