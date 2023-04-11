import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DepositSwitchGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    depositSwitchGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
