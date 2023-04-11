import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a change made to a configuration.
 */
export declare class MutationRecord extends SpeakeasyBase {
    /**
     * When the change occurred.
     */
    mutateTime?: string;
    /**
     * The email address of the user making the change.
     */
    mutatedBy?: string;
}
