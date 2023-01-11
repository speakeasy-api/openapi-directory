import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error option model
**/
export declare class ErrorOptions extends SpeakeasyBase {
    code?: string;
    description?: string;
}
/**
 * The error model
**/
export declare class ErrorT extends SpeakeasyBase {
    field?: string;
    message?: string;
    options?: ErrorOptions[];
    path?: string;
}
