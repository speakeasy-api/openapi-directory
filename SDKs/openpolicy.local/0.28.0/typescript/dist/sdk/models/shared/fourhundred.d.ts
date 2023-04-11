import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Where the error occurred
 */
export declare class FourHundredErrorsLocation extends SpeakeasyBase {
    /**
     * The column in the policy module where the error occurred
     */
    col?: number;
    /**
     * The policy module name that generated the error
     */
    file?: string;
    /**
     * The line number in the policy module where the error occurred
     */
    row?: number;
}
export declare class FourHundredErrors extends SpeakeasyBase {
    /**
     * The error code name
     */
    code?: string;
    /**
     * Where the error occurred
     */
    location?: FourHundredErrorsLocation;
    /**
     * A general description of the error
     */
    message?: string;
}
/**
 * Bad request
 */
export declare class FourHundred extends SpeakeasyBase {
    /**
     * The error code name
     */
    code: string;
    /**
     * Errors that may have been generated during the parse, compile, or installation of a policy module
     */
    errors?: FourHundredErrors[];
    /**
     * The description of the error
     */
    message: string;
}
