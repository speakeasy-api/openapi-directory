import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCallTokenRequest extends SpeakeasyBase {
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    /**
     * **Server-side only**. User ID which server acts upon
     */
    userId?: string;
}
