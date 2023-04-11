import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorAuthGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    processorAuthGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
