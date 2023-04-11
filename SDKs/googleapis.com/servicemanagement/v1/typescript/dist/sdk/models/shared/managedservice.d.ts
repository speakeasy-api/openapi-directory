import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The full representation of a Service that is managed by Google Service Management.
 */
export declare class ManagedService extends SpeakeasyBase {
    /**
     * ID of the project that produces and owns this service.
     */
    producerProjectId?: string;
    /**
     * The name of the service. See the [overview](https://cloud.google.com/service-infrastructure/docs/overview) for naming requirements.
     */
    serviceName?: string;
}
