import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions } from "./googleclouddataplexv1zonediscoveryspeccsvoptions";
import { GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions } from "./googleclouddataplexv1zonediscoveryspecjsonoptions";
/**
 * Settings to manage the metadata discovery and publishing in a zone.
 */
export declare class GoogleCloudDataplexV1ZoneDiscoverySpec extends SpeakeasyBase {
    /**
     * Describe CSV and similar semi-structured data formats.
     */
    csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
    /**
     * Required. Whether discovery is enabled.
     */
    enabled?: boolean;
    /**
     * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    excludePatterns?: string[];
    /**
     * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    includePatterns?: string[];
    /**
     * Describe JSON data format.
     */
    jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
    /**
     * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.
     */
    schedule?: string;
}
