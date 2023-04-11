import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A precondition on a document, used for conditional operations.
 */
export declare class Precondition extends SpeakeasyBase {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    exists?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    updateTime?: string;
}
