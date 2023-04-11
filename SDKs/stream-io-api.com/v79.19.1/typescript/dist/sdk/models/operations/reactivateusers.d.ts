import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReactivateUsersResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    reactivateUsersResponse?: shared.ReactivateUsersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
