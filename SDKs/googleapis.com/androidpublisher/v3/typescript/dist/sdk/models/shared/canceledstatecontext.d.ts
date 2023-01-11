import { SpeakeasyBase } from "../../../internal/utils";
import { UserInitiatedCancellation } from "./userinitiatedcancellation";
/**
 * Information specific to a subscription in canceled state.
**/
export declare class CanceledStateContext extends SpeakeasyBase {
    developerInitiatedCancellation?: Record<string, any>;
    replacementCancellation?: Record<string, any>;
    systemInitiatedCancellation?: Record<string, any>;
    userInitiatedCancellation?: UserInitiatedCancellation;
}
