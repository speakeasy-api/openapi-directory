import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Links object specific to Error objects
**/
export declare class ErrorErrorLinks extends SpeakeasyBase {
    about?: any;
}
/**
 * an object containing references to the source of the error
**/
export declare class ErrorErrorSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
/**
 * An error response
**/
export declare class ErrorT extends SpeakeasyBase {
    code?: string;
    detail?: string;
    id?: string;
    links?: ErrorErrorLinks;
    meta?: Record<string, any>;
    source?: ErrorErrorSource;
    status?: string;
    title?: string;
}
