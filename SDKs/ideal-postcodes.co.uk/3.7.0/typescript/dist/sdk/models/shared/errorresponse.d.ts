import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource not found
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.
     */
    code: number;
    /**
     * Human readable error message supplied with every error response.
     */
    message: string;
}
