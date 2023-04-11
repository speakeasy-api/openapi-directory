import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unauthorized
 */
export declare class ErrorT extends SpeakeasyBase {
    code?: number;
    error?: string;
    errors?: any[];
    link?: string;
    message?: string;
    status?: string;
}
