import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1FirewallPolicy } from "./googlecloudrecaptchaenterprisev1firewallpolicy";
/**
 * Response to request to list firewall policies belonging to a key.
 */
export declare class GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse extends SpeakeasyBase {
    /**
     * Policy details.
     */
    firewallPolicies?: GoogleCloudRecaptchaenterpriseV1FirewallPolicy[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no policies remain in results.
     */
    nextPageToken?: string;
}
