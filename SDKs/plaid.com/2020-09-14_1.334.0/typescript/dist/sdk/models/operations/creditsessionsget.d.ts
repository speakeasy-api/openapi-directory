import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditSessionsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditSessionsGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
