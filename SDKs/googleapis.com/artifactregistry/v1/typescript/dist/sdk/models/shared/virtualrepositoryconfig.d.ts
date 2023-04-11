import { SpeakeasyBase } from "../../../internal/utils";
import { UpstreamPolicy } from "./upstreampolicy";
/**
 * Virtual repository configuration.
 */
export declare class VirtualRepositoryConfig extends SpeakeasyBase {
    /**
     * Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository.
     */
    upstreamPolicies?: UpstreamPolicy[];
}
