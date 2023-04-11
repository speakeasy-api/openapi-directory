import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the `BatchEnableServices` method.
 */
export declare class BatchEnableServicesRequest extends SpeakeasyBase {
    /**
     * The identifiers of the services to enable on the project. A valid identifier would be: serviceusage.googleapis.com Enabling services requires that each service is public or is shared with the user enabling the service. Two or more services must be specified. To enable a single service, use the `EnableService` method instead. A single request can enable a maximum of 20 services at a time. If more than 20 services are specified, the request will fail, and no state changes will occur.
     */
    serviceIds?: string[];
}
