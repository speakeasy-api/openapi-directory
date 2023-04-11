import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryMessageFlagsRequest extends SpeakeasyBase {
    filterConditions?: Record<string, any>;
    limit?: number;
    offset?: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    /**
     * **Server-side only**. User ID which server acts upon
     */
    userId?: string;
}
