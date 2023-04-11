import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllLinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    environment?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
