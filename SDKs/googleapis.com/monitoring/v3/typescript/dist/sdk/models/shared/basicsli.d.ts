import { SpeakeasyBase } from "../../../internal/utils";
import { LatencyCriteria } from "./latencycriteria";
/**
 * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
 */
export declare class BasicSli extends SpeakeasyBase {
    /**
     * Future parameters for the availability SLI.
     */
    availability?: Record<string, any>;
    /**
     * Parameters for a latency threshold SLI.
     */
    latency?: LatencyCriteria;
    /**
     * OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error.
     */
    location?: string[];
    /**
     * OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error.
     */
    method?: string[];
    /**
     * OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error.
     */
    version?: string[];
}
