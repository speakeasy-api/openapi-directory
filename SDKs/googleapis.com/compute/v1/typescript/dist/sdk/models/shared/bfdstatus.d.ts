import { SpeakeasyBase } from "../../../internal/utils";
import { BfdPacket } from "./bfdpacket";
import { BfdStatusPacketCounts } from "./bfdstatuspacketcounts";
import { PacketIntervals } from "./packetintervals";
/**
 * The BFD session initialization mode for this BGP peer. If set to ACTIVE, the Cloud Router will initiate the BFD session for this BGP peer. If set to PASSIVE, the Cloud Router will wait for the peer router to initiate the BFD session for this BGP peer. If set to DISABLED, BFD is disabled for this BGP peer.
 */
export declare enum BfdStatusBfdSessionInitializationModeEnum {
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Passive = "PASSIVE"
}
/**
 * The diagnostic code specifies the local system's reason for the last change in session state. This allows remote systems to determine the reason that the previous session failed, for example. These diagnostic codes are specified in section 4.1 of RFC5880
 */
export declare enum BfdStatusLocalDiagnosticEnum {
    AdministrativelyDown = "ADMINISTRATIVELY_DOWN",
    ConcatenatedPathDown = "CONCATENATED_PATH_DOWN",
    ControlDetectionTimeExpired = "CONTROL_DETECTION_TIME_EXPIRED",
    DiagnosticUnspecified = "DIAGNOSTIC_UNSPECIFIED",
    EchoFunctionFailed = "ECHO_FUNCTION_FAILED",
    ForwardingPlaneReset = "FORWARDING_PLANE_RESET",
    NeighborSignaledSessionDown = "NEIGHBOR_SIGNALED_SESSION_DOWN",
    NoDiagnostic = "NO_DIAGNOSTIC",
    PathDown = "PATH_DOWN",
    ReverseConcatenatedPathDown = "REVERSE_CONCATENATED_PATH_DOWN"
}
/**
 * The current BFD session state as seen by the transmitting system. These states are specified in section 4.1 of RFC5880
 */
export declare enum BfdStatusLocalStateEnum {
    AdminDown = "ADMIN_DOWN",
    Down = "DOWN",
    Init = "INIT",
    StateUnspecified = "STATE_UNSPECIFIED",
    Up = "UP"
}
/**
 * Next free: 15
 */
export declare class BfdStatus extends SpeakeasyBase {
    /**
     * The BFD session initialization mode for this BGP peer. If set to ACTIVE, the Cloud Router will initiate the BFD session for this BGP peer. If set to PASSIVE, the Cloud Router will wait for the peer router to initiate the BFD session for this BGP peer. If set to DISABLED, BFD is disabled for this BGP peer.
     */
    bfdSessionInitializationMode?: BfdStatusBfdSessionInitializationModeEnum;
    /**
     * Unix timestamp of the most recent config update.
     */
    configUpdateTimestampMicros?: string;
    controlPacketCounts?: BfdStatusPacketCounts;
    /**
     * Inter-packet time interval statistics for control packets.
     */
    controlPacketIntervals?: PacketIntervals[];
    /**
     * The diagnostic code specifies the local system's reason for the last change in session state. This allows remote systems to determine the reason that the previous session failed, for example. These diagnostic codes are specified in section 4.1 of RFC5880
     */
    localDiagnostic?: BfdStatusLocalDiagnosticEnum;
    /**
     * The current BFD session state as seen by the transmitting system. These states are specified in section 4.1 of RFC5880
     */
    localState?: BfdStatusLocalStateEnum;
    /**
     * Negotiated transmit interval for control packets.
     */
    negotiatedLocalControlTxIntervalMs?: number;
    rxPacket?: BfdPacket;
    txPacket?: BfdPacket;
    /**
     * Session uptime in milliseconds. Value will be 0 if session is not up.
     */
    uptimeMs?: string;
}
