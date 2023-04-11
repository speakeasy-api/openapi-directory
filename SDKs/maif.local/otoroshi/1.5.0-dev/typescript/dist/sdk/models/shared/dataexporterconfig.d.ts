import { SpeakeasyBase } from "../../../internal/utils";
import { Filtering } from "./filtering";
import { Location } from "./location";
/**
 * Type of data exporter
 */
export declare enum DataExporterConfigTypEnum {
    Kafka = "kafka",
    Pulsar = "pulsar",
    File = "file",
    Mailer = "mailer",
    Elastic = "elastic",
    Console = "console",
    Custom = "custom"
}
/**
 * Settings to export Otorshi events
 */
export declare class DataExporterConfig extends SpeakeasyBase {
    /**
     * buffer size
     */
    bufferSize?: number;
    /**
     * Data Exporter config
     */
    config?: any;
    /**
     * Description
     */
    desc?: string;
    /**
     * Boolean
     */
    enabled?: string;
    filtering?: Filtering;
    /**
     * duration
     */
    groupDuration?: number;
    /**
     * Group size
     */
    groupSize?: number;
    /**
     * Id
     */
    id?: string;
    /**
     * nb workers
     */
    jsonWorkers?: number;
    location?: Location;
    /**
     * Metadata
     */
    metadata?: Record<string, string>;
    /**
     * Name
     */
    name?: string;
    /**
     * projection
     */
    projection?: Record<string, string>;
    /**
     * send workers
     */
    sendWorkers?: number;
    /**
     * Type of data exporter
     */
    typ?: DataExporterConfigTypEnum;
}
