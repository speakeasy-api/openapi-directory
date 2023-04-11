import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * An error response body
 */
export declare class ErrorResponseBody extends SpeakeasyBase {
    /**
     * The errors associated with the failed API call
     */
    errors: ErrorT[];
    /**
     * A UUID that uniquely identifies the request id.
     *
     * @remarks
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    requestId: string;
}
