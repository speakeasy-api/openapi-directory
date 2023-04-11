import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ResourceRecord } from "./resourcerecord";
/**
 * The current state of the Domain Mapping.
 */
export declare class DomainMappingStatus extends SpeakeasyBase {
    /**
     * Array of observed DomainMappingConditions, indicating the current state of the DomainMapping.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * The name of the route that the mapping currently points to.
     */
    mappedRouteName?: string;
    /**
     * ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.
     */
    resourceRecords?: ResourceRecord[];
    /**
     * Optional. Not supported by Cloud Run.
     */
    url?: string;
}
