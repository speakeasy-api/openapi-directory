import { SpeakeasyBase } from "../../../internal/utils";
import { CollectdValue } from "./collectdvalue";
import { TypedValue } from "./typedvalue";
/**
 * A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
 */
export declare class CollectdPayload extends SpeakeasyBase {
    /**
     * The end time of the interval.
     */
    endTime?: string;
    /**
     * The measurement metadata. Example: "process_id" -> 12345
     */
    metadata?: Record<string, TypedValue>;
    /**
     * The name of the plugin. Example: "disk".
     */
    plugin?: string;
    /**
     * The instance name of the plugin Example: "hdcl".
     */
    pluginInstance?: string;
    /**
     * The start time of the interval.
     */
    startTime?: string;
    /**
     * The measurement type. Example: "memory".
     */
    type?: string;
    /**
     * The measurement type instance. Example: "used".
     */
    typeInstance?: string;
    /**
     * The measured values during this time interval. Each value must have a different data_source_name.
     */
    values?: CollectdValue[];
}
