import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Error message per source response.
 */
export declare class ErrorMessage extends SpeakeasyBase {
    errorMessage?: string;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
}
