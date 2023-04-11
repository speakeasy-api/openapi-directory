import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Reference of AddressGroup.
 */
export declare class ListAddressGroupReferencesResponseAddressGroupReference extends SpeakeasyBase {
    /**
     * FirewallPolicy that is using the Address Group.
     */
    firewallPolicy?: string;
    /**
     * Rule priority of the FirewallPolicy that is using the Address Group.
     */
    rulePriority?: number;
}
