import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Too Many Requests
 */
export declare class TooManyRequests extends SpeakeasyBase {
    code?: number;
    error?: string;
    errors?: any[];
    link?: string;
    message?: string;
    spamWarningUrn?: string;
    status?: string;
}
