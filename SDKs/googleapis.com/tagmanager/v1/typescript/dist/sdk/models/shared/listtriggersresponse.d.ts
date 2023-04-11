import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * List triggers response.
 */
export declare class ListTriggersResponse extends SpeakeasyBase {
    /**
     * All GTM Triggers of a GTM Container.
     */
    triggers?: Trigger[];
}
