import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the high availability requirement state for the VPN connection. Valid values are CONNECTION_REDUNDANCY_MET, CONNECTION_REDUNDANCY_NOT_MET.
 */
export declare enum VpnGatewayStatusHighAvailabilityRequirementStateStateEnum {
    ConnectionRedundancyMet = "CONNECTION_REDUNDANCY_MET",
    ConnectionRedundancyNotMet = "CONNECTION_REDUNDANCY_NOT_MET"
}
/**
 * Indicates the reason why the VPN connection does not meet the high availability redundancy criteria/requirement. Valid values is INCOMPLETE_TUNNELS_COVERAGE.
 */
export declare enum VpnGatewayStatusHighAvailabilityRequirementStateUnsatisfiedReasonEnum {
    IncompleteTunnelsCoverage = "INCOMPLETE_TUNNELS_COVERAGE"
}
/**
 * Describes the high availability requirement state for the VPN connection between this Cloud VPN gateway and a peer gateway.
 */
export declare class VpnGatewayStatusHighAvailabilityRequirementState extends SpeakeasyBase {
    /**
     * Indicates the high availability requirement state for the VPN connection. Valid values are CONNECTION_REDUNDANCY_MET, CONNECTION_REDUNDANCY_NOT_MET.
     */
    state?: VpnGatewayStatusHighAvailabilityRequirementStateStateEnum;
    /**
     * Indicates the reason why the VPN connection does not meet the high availability redundancy criteria/requirement. Valid values is INCOMPLETE_TUNNELS_COVERAGE.
     */
    unsatisfiedReason?: VpnGatewayStatusHighAvailabilityRequirementStateUnsatisfiedReasonEnum;
}
