import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaBucket } from "./quotabucket";
/**
 * Consumer quota settings for a quota limit.
 */
export declare class ConsumerQuotaLimit extends SpeakeasyBase {
    /**
     * Whether admin overrides are allowed on this limit
     */
    allowsAdminOverrides?: boolean;
    /**
     * Whether this limit is precise or imprecise.
     */
    isPrecise?: boolean;
    /**
     * The name of the parent metric of this limit. An example name would be: `compute.googleapis.com/cpus`
     */
    metric?: string;
    /**
     * The resource name of the quota limit. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.
     */
    name?: string;
    /**
     * Summary of the enforced quota buckets, organized by quota dimension, ordered from least specific to most specific (for example, the global default bucket, with no quota dimensions, will always appear first).
     */
    quotaBuckets?: QuotaBucket[];
    /**
     * List of all supported locations. This field is present only if the limit has a {region} or {zone} dimension.
     */
    supportedLocations?: string[];
    /**
     * The limit unit. An example unit would be `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.
     */
    unit?: string;
}
