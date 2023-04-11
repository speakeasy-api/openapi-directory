import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rate Limited
 */
export declare class RateLimitedResponse extends SpeakeasyBase {
    /**
     * `429X` type error response code
     */
    code: number;
    /**
     * Request is being rate limited
     */
    message: string;
}
