import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    processorTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
