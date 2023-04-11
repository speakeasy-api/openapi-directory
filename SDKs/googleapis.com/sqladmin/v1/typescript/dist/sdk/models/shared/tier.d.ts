import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Cloud SQL service tier resource.
 */
export declare class Tier extends SpeakeasyBase {
    /**
     * The maximum disk size of this tier in bytes.
     */
    diskQuota?: string;
    /**
     * The maximum RAM usage of this tier in bytes.
     */
    ram?: string;
    /**
     * This is always `sql#tier`.
     */
    kind?: string;
    /**
     * The applicable regions for this tier.
     */
    region?: string[];
    /**
     * An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).
     */
    tier?: string;
}
