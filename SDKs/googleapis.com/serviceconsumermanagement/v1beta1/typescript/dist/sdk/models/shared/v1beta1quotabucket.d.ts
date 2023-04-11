import { SpeakeasyBase } from "../../../internal/utils";
import { V1Beta1QuotaOverride } from "./v1beta1quotaoverride";
/**
 * A quota bucket is a quota provisioning unit for a specific set of dimensions.
 */
export declare class V1Beta1QuotaBucket extends SpeakeasyBase {
    /**
     * A quota override
     */
    adminOverride?: V1Beta1QuotaOverride;
    /**
     * A quota override
     */
    consumerOverride?: V1Beta1QuotaOverride;
    /**
     * The default limit of this quota bucket, as specified by the service configuration.
     */
    defaultLimit?: string;
    /**
     * The dimensions of this quota bucket. If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override. If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map. For example, if the map has key "region" and value "us-east-1", then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.
     */
    dimensions?: Record<string, string>;
    /**
     * The effective limit of this quota bucket. Equal to default_limit if there are no overrides.
     */
    effectiveLimit?: string;
    /**
     * A quota override
     */
    producerOverride?: V1Beta1QuotaOverride;
}
