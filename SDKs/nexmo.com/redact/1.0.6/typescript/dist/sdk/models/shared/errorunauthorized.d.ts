import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication failure
 */
export declare class ErrorUnauthorized extends SpeakeasyBase {
    /**
     * Error title
     */
    errorTitle: string;
    /**
     * Machine readable error type
     */
    type: string;
}
