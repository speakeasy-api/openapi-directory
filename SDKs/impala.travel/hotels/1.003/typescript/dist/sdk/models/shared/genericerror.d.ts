import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
 */
export declare class GenericError extends SpeakeasyBase {
    /**
     * Error code for you to use programatically, for error logging and debugging.
     */
    code?: string;
    /**
     * Error message intended to aid developers in debugging issues. We strongly advise against displaying this information publicly to your guests as it **might contain sensitive implementation details**.
     */
    message: string;
}
