import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unauthorized
 */
export declare class UnauthorizedResponse extends SpeakeasyBase {
    /**
     * `401X` type error response code
     */
    code: number;
    /**
     * Unauthorized request error description
     */
    message: string;
}
