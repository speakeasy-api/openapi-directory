import { SpeakeasyBase } from "../../../internal/utils";
import { Subnetwork } from "./subnetwork";
/**
 * The first validation which failed.
 */
export declare enum ValidateConsumerConfigResponseValidationErrorEnum {
    ValidationErrorUnspecified = "VALIDATION_ERROR_UNSPECIFIED",
    ValidationNotRequested = "VALIDATION_NOT_REQUESTED",
    ServiceNetworkingNotEnabled = "SERVICE_NETWORKING_NOT_ENABLED",
    NetworkNotFound = "NETWORK_NOT_FOUND",
    NetworkNotPeered = "NETWORK_NOT_PEERED",
    NetworkPeeringDeleted = "NETWORK_PEERING_DELETED",
    NetworkNotInConsumersProject = "NETWORK_NOT_IN_CONSUMERS_PROJECT",
    NetworkNotInConsumersHostProject = "NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT",
    HostProjectNotFound = "HOST_PROJECT_NOT_FOUND",
    ConsumerProjectNotServiceProject = "CONSUMER_PROJECT_NOT_SERVICE_PROJECT",
    RangesExhausted = "RANGES_EXHAUSTED",
    RangesNotReserved = "RANGES_NOT_RESERVED",
    RangesDeletedLater = "RANGES_DELETED_LATER",
    ComputeApiNotEnabled = "COMPUTE_API_NOT_ENABLED",
    UsePermissionNotFound = "USE_PERMISSION_NOT_FOUND"
}
/**
 * Successful response
 */
export declare class ValidateConsumerConfigResponse extends SpeakeasyBase {
    /**
     * List of subnetwork candidates from the request which exist with the `ip_cidr_range`, `secondary_ip_cider_ranges`, and `outside_allocation` fields set.
     */
    existingSubnetworkCandidates?: Subnetwork[];
    /**
     * Indicates whether all the requested validations passed.
     */
    isValid?: boolean;
    /**
     * The first validation which failed.
     */
    validationError?: ValidateConsumerConfigResponseValidationErrorEnum;
}
