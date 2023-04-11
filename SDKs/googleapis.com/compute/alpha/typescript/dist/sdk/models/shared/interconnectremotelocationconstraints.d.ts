import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectRemoteLocationConstraintsSubnetLengthRange } from "./interconnectremotelocationconstraintssubnetlengthrange";
/**
 * [Output Only] Port pair remote location constraints, which can take one of the following values: PORT_PAIR_UNCONSTRAINED_REMOTE_LOCATION, PORT_PAIR_MATCHING_REMOTE_LOCATION. GCP's API refers only to individual ports, but the UI uses this field when ordering a pair of ports, to prevent users from accidentally ordering something that is incompatible with their cloud provider. Specifically, when ordering a redundant pair of Cross-Cloud Interconnect ports, and one of them uses a remote location with portPairMatchingRemoteLocation set to matching, the UI will require that both ports use the same remote location.
 */
export declare enum InterconnectRemoteLocationConstraintsPortPairRemoteLocationEnum {
    PortPairMatchingRemoteLocation = "PORT_PAIR_MATCHING_REMOTE_LOCATION",
    PortPairUnconstrainedRemoteLocation = "PORT_PAIR_UNCONSTRAINED_REMOTE_LOCATION"
}
/**
 * [Output Only] Port pair VLAN constraints, which can take one of the following values: PORT_PAIR_UNCONSTRAINED_VLAN, PORT_PAIR_MATCHING_VLAN
 */
export declare enum InterconnectRemoteLocationConstraintsPortPairVlanEnum {
    PortPairMatchingVlan = "PORT_PAIR_MATCHING_VLAN",
    PortPairUnconstrainedVlan = "PORT_PAIR_UNCONSTRAINED_VLAN"
}
export declare class InterconnectRemoteLocationConstraints extends SpeakeasyBase {
    /**
     * [Output Only] Port pair remote location constraints, which can take one of the following values: PORT_PAIR_UNCONSTRAINED_REMOTE_LOCATION, PORT_PAIR_MATCHING_REMOTE_LOCATION. GCP's API refers only to individual ports, but the UI uses this field when ordering a pair of ports, to prevent users from accidentally ordering something that is incompatible with their cloud provider. Specifically, when ordering a redundant pair of Cross-Cloud Interconnect ports, and one of them uses a remote location with portPairMatchingRemoteLocation set to matching, the UI will require that both ports use the same remote location.
     */
    portPairRemoteLocation?: InterconnectRemoteLocationConstraintsPortPairRemoteLocationEnum;
    /**
     * [Output Only] Port pair VLAN constraints, which can take one of the following values: PORT_PAIR_UNCONSTRAINED_VLAN, PORT_PAIR_MATCHING_VLAN
     */
    portPairVlan?: InterconnectRemoteLocationConstraintsPortPairVlanEnum;
    subnetLengthRange?: InterconnectRemoteLocationConstraintsSubnetLengthRange;
}
