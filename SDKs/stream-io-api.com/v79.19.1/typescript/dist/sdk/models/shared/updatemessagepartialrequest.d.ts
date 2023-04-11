import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMessagePartialRequest extends SpeakeasyBase {
    /**
     * Sets new field values
     */
    set: Record<string, any>;
    /**
     * Do not try to enrich the links within message
     */
    skipEnrichUrl?: boolean;
    /**
     * Array of field names to unset
     */
    unset: string[];
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
