import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerHubConfig } from "./policycontrollerhubconfig";
/**
 * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
 */
export declare class PolicyControllerMembershipSpec extends SpeakeasyBase {
    /**
     * Configuration for Policy Controller
     */
    policyControllerHubConfig?: PolicyControllerHubConfig;
    /**
     * Version of Policy Controller installed.
     */
    version?: string;
}
