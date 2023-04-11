import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates a single service in Google Cloud Platform.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * The business under which the service is offered. Ex. "businessEntities/GCP", "businessEntities/Maps"
     */
    businessEntityName?: string;
    /**
     * A human readable display name for this service.
     */
    displayName?: string;
    /**
     * The resource name for the service. Example: "services/DA34-426B-A397"
     */
    name?: string;
    /**
     * The identifier for the service. Example: "DA34-426B-A397"
     */
    serviceId?: string;
}
