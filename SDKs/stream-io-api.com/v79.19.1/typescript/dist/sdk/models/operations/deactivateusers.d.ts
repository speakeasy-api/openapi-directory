import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeactivateUsersResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    /**
     * Successful response
     */
    deactivateUsersResponse?: shared.DeactivateUsersResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
