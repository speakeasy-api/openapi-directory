import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the auto-registration of the Forwarding Rule to Service Directory. The region and project of the Service Directory resource generated from this registration will be the same as this Forwarding Rule.
 */
export declare class ForwardingRuleServiceDirectoryRegistration extends SpeakeasyBase {
    /**
     * Service Directory namespace to register the forwarding rule under.
     */
    namespace?: string;
    /**
     * Service Directory service to register the forwarding rule under.
     */
    service?: string;
    /**
     * [Optional] Service Directory region to register this global forwarding rule under. Default to "us-central1". Only used for PSC for Google APIs. All PSC for Google APIs Forwarding Rules on the same network should use the same Service Directory region.
     */
    serviceDirectoryRegion?: string;
}
