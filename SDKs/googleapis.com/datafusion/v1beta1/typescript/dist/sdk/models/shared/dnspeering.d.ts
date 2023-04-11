import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
 */
export declare class DnsPeering extends SpeakeasyBase {
    /**
     * Optional. Optional description of the dns zone.
     */
    description?: string;
    /**
     * Required. The dns name suffix of the zone.
     */
    domain?: string;
    /**
     * Required. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering}
     */
    name?: string;
    /**
     * Optional. Optional target network to which dns peering should happen.
     */
    targetNetwork?: string;
    /**
     * Optional. Optional target project to which dns peering should happen.
     */
    targetProject?: string;
}
