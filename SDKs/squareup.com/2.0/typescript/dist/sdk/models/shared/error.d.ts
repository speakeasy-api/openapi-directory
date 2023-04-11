import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an error encountered during a request to the Connect API.
 *
 * @remarks
 *
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The high-level category for the error.
     */
    category: string;
    /**
     * The specific code of the error.
     */
    code: string;
    /**
     * A human-readable description of the error for debugging purposes.
     */
    detail?: string;
    /**
     * The name of the field provided in the original request (if any) that
     *
     * @remarks
     * the error pertains to.
     */
    field?: string;
}
