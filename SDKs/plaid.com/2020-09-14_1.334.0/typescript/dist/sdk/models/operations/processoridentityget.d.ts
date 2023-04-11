import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorIdentityGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    processorIdentityGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
