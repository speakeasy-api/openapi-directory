import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DepositSwitchAltCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    depositSwitchAltCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
