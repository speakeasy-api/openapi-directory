import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom error rule.
 */
export declare class CustomErrorRule extends SpeakeasyBase {
    /**
     * Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload.
     */
    isErrorType?: boolean;
    /**
     * Selects messages to which this rule applies. Refer to selector for syntax details.
     */
    selector?: string;
}
