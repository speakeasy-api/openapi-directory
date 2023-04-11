import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
 */
export declare class MonitoredResourceMetadata extends SpeakeasyBase {
    /**
     * Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false }
     */
    systemLabels?: Record<string, any>;
    /**
     * Output only. A map of user-defined metadata labels.
     */
    userLabels?: Record<string, string>;
}
