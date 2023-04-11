import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusScheduling } from "./resourcestatusscheduling";
import { ResourceStatusServiceIntegrationStatus } from "./resourcestatusserviceintegrationstatus";
import { ResourceStatusUpcomingMaintenance } from "./resourcestatusupcomingmaintenance";
/**
 * Contains output only fields. Use this sub-message for actual values set on Instance attributes as compared to the value requested by the user (intent) in their instance CRUD calls.
 */
export declare class ResourceStatus extends SpeakeasyBase {
    /**
     * [Output Only] An opaque ID of the host on which the VM is running.
     */
    physicalHost?: string;
    scheduling?: ResourceStatusScheduling;
    /**
     * [Output Only] Represents the status of the service integration specs defined by the user in instance.serviceIntegrationSpecs.
     */
    serviceIntegrationStatuses?: Record<string, ResourceStatusServiceIntegrationStatus>;
    upcomingMaintenance?: ResourceStatusUpcomingMaintenance;
}
