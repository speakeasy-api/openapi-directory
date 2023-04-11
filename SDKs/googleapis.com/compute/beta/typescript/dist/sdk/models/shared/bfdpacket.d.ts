import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The diagnostic code specifies the local system's reason for the last change in session state. This allows remote systems to determine the reason that the previous session failed, for example. These diagnostic codes are specified in section 4.1 of RFC5880
 */
export declare enum BfdPacketDiagnosticEnum {
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
export declare enum BfdPacketStateEnum {
    AdminDown = "ADMIN_DOWN",
    Down = "DOWN",
    Init = "INIT",
    StateUnspecified = "STATE_UNSPECIFIED",
    Up = "UP"
}
export declare class BfdPacket extends SpeakeasyBase {
    /**
     * The Authentication Present bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    authenticationPresent?: boolean;
    /**
     * The Control Plane Independent bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    controlPlaneIndependent?: boolean;
    /**
     * The demand bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    demand?: boolean;
    /**
     * The diagnostic code specifies the local system's reason for the last change in session state. This allows remote systems to determine the reason that the previous session failed, for example. These diagnostic codes are specified in section 4.1 of RFC5880
     */
    diagnostic?: BfdPacketDiagnosticEnum;
    /**
     * The Final bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    final?: boolean;
    /**
     * The length of the BFD Control packet in bytes. This is specified in section 4.1 of RFC5880
     */
    length?: number;
    /**
     * The Required Min Echo RX Interval value in the BFD packet. This is specified in section 4.1 of RFC5880
     */
    minEchoRxIntervalMs?: number;
    /**
     * The Required Min RX Interval value in the BFD packet. This is specified in section 4.1 of RFC5880
     */
    minRxIntervalMs?: number;
    /**
     * The Desired Min TX Interval value in the BFD packet. This is specified in section 4.1 of RFC5880
     */
    minTxIntervalMs?: number;
    /**
     * The detection time multiplier of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    multiplier?: number;
    /**
     * The multipoint bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    multipoint?: boolean;
    /**
     * The My Discriminator value in the BFD packet. This is specified in section 4.1 of RFC5880
     */
    myDiscriminator?: number;
    /**
     * The Poll bit of the BFD packet. This is specified in section 4.1 of RFC5880
     */
    poll?: boolean;
    /**
     * The current BFD session state as seen by the transmitting system. These states are specified in section 4.1 of RFC5880
     */
    state?: BfdPacketStateEnum;
    /**
     * The version number of the BFD protocol, as specified in section 4.1 of RFC5880.
     */
    version?: number;
    /**
     * The Your Discriminator value in the BFD packet. This is specified in section 4.1 of RFC5880
     */
    yourDiscriminator?: number;
}
