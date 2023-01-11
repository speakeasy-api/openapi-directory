import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Links object specific to Error objects
**/
export declare class WarningsErrorLinks extends SpeakeasyBase {
    about?: any;
}
/**
 * an object containing references to the source of the error
**/
export declare class WarningsErrorSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
/**
 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
 *
 * From the specification:
 *
 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
 *
 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
**/
export declare class Warnings extends SpeakeasyBase {
    code?: string;
    detail: string;
    id?: string;
    links?: WarningsErrorLinks;
    meta?: Record<string, any>;
    source?: WarningsErrorSource;
    title?: string;
    type: string;
}
