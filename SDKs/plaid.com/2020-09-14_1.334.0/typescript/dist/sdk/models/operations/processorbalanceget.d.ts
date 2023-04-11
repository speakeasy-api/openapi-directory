import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorBalanceGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    processorBalanceGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
