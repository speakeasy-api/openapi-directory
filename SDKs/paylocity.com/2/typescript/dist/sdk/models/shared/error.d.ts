import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error option model
 */
export declare class ErrorOptions extends SpeakeasyBase {
    /**
     * The code associated with this option.
     */
    code?: string;
    /**
     * The description of the option.
     */
    description?: string;
}
/**
 * The error model
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The name of the field, or property in the request message that contains an error.
     */
    field?: string;
    /**
     * The error message.
     */
    message?: string;
    /**
     * A list of options associated with this error. These options may indicate valid values for the field, or property that contains an error.
     */
    options?: ErrorOptions[];
    /**
     * The JSON path of the field, or property, that contains an error in the request message.
     */
    path?: string;
}
