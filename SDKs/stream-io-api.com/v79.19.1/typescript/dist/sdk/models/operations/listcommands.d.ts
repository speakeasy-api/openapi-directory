import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCommandsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    listCommandsResponse?: shared.ListCommandsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
