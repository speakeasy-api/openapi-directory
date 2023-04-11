import { SpeakeasyBase } from "../../../internal/utils";
import { UserInitiatedCancellation } from "./userinitiatedcancellation";
/**
 * Information specific to a subscription in canceled state.
 */
export declare class CanceledStateContext extends SpeakeasyBase {
    /**
     * Information specific to cancellations initiated by developers.
     */
    developerInitiatedCancellation?: Record<string, any>;
    /**
     * Information specific to cancellations caused by subscription replacement.
     */
    replacementCancellation?: Record<string, any>;
    /**
     * Information specific to cancellations initiated by Google system.
     */
    systemInitiatedCancellation?: Record<string, any>;
    /**
     * Information specific to cancellations initiated by users.
     */
    userInitiatedCancellation?: UserInitiatedCancellation;
}
