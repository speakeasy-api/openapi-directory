import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class GuestResponse extends SpeakeasyBase {
    /**
     * Authentication token to use for guest user
     */
    accessToken: string;
    duration: string;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
