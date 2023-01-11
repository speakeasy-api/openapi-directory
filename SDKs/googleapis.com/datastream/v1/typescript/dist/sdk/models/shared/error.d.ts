import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a user-facing Error.
**/
export declare class ErrorT extends SpeakeasyBase {
    details?: Record<string, string>;
    errorTime?: string;
    errorUuid?: string;
    message?: string;
    reason?: string;
}
