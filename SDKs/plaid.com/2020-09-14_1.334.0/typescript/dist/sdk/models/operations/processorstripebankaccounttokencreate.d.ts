import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorStripeBankAccountTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    processorStripeBankAccountTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
