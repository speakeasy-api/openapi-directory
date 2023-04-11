import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Your API request has been rejected. Check error code for details
 */
export declare class APIError extends SpeakeasyBase {
    /**
     * API error code. If set and > 0 then an API error has occurred your request could not be completed
     */
    apiError: number;
    /**
     * API error message
     */
    apiErrorMsg: string;
}
