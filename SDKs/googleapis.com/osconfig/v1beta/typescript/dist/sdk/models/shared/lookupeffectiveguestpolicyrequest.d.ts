import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request message for getting the effective guest policy assigned to the instance.
 */
export declare class LookupEffectiveGuestPolicyRequest extends SpeakeasyBase {
    /**
     * Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
     */
    osArchitecture?: string;
    /**
     * Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
     */
    osShortName?: string;
    /**
     * Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.
     */
    osVersion?: string;
}
