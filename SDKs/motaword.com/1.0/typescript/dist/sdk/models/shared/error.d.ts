import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication error
 */
export declare class ErrorT extends SpeakeasyBase {
    code?: string;
    help?: string;
    httpCode?: number;
    message?: string;
}
