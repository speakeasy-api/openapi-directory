import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.
 */
export declare class ErrorT extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters?: ErrorInvalidParameters;
    type: string;
}
