import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSegmentResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    /**
     * Successful response
     */
    createSegmentResponse?: shared.CreateSegmentResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
