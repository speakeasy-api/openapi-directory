import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * **Causes:**
 *
 * @remarks
 *   * Format mismatch of any of attributes.
 *
 */
export declare class ErrorResponse extends SpeakeasyBase {
    error?: ErrorT;
}
