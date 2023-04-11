import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
 */
export declare class LocationPreference extends SpeakeasyBase {
    /**
     * The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance.
     */
    followGaeApplication?: string;
    /**
     * This is always `sql#locationPreference`.
     */
    kind?: string;
    /**
     * The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.).
     */
    secondaryZone?: string;
    /**
     * The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance.
     */
    zone?: string;
}
