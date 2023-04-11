import { SpeakeasyBase } from "../../../internal/utils";
export declare class APIErrorErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
/**
 * API invocation or processing error
 */
export declare class APIError extends SpeakeasyBase {
    errors?: APIErrorErrors[];
}
