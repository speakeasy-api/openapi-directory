import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListChannelTypesResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    listChannelTypesResponse?: shared.ListChannelTypesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
