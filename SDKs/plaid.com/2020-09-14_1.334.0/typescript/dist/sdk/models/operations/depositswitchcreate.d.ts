import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DepositSwitchCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    depositSwitchCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
