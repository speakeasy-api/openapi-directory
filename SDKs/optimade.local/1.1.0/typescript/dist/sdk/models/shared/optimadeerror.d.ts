import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Links object specific to Error objects
**/
export declare class OptimadeErrorErrorLinks extends SpeakeasyBase {
    about?: any;
}
/**
 * an object containing references to the source of the error
**/
export declare class OptimadeErrorErrorSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
/**
 * detail MUST be present
**/
export declare class OptimadeError extends SpeakeasyBase {
    code?: string;
    detail: string;
    id?: string;
    links?: OptimadeErrorErrorLinks;
    meta?: Record<string, any>;
    source?: OptimadeErrorErrorSource;
    status?: string;
    title?: string;
}
