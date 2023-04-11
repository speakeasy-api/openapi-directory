import { SpeakeasyBase } from "../../../internal/utils";
import { PushConfig } from "./pushconfig";
/**
 * Request for the ModifyPushConfig method.
 */
export declare class ModifyPushConfigRequest extends SpeakeasyBase {
    /**
     * Configuration for a push delivery endpoint.
     */
    pushConfig?: PushConfig;
    /**
     * The name of the subscription.
     */
    subscription?: string;
}
