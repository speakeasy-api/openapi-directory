import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorObject } from "./errorobject";
/**
 * Generic error response that returns one or more errors.
 *
 * @remarks
 *
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * The list of errors returned in this response.
     *
     * @remarks
     *
     */
    errors: ErrorObject[];
}
