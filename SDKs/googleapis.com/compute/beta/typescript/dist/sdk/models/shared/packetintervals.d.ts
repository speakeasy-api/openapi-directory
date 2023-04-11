import { SpeakeasyBase } from "../../../internal/utils";
/**
 * From how long ago in the past these intervals were observed.
 */
export declare enum PacketIntervalsDurationEnum {
    DurationUnspecified = "DURATION_UNSPECIFIED",
    Hour = "HOUR",
    Max = "MAX",
    Minute = "MINUTE"
}
/**
 * The type of packets for which inter-packet intervals were computed.
 */
export declare enum PacketIntervalsTypeEnum {
    Loopback = "LOOPBACK",
    Receive = "RECEIVE",
    Transmit = "TRANSMIT",
    TypeUnspecified = "TYPE_UNSPECIFIED"
}
/**
 * Next free: 7
 */
export declare class PacketIntervals extends SpeakeasyBase {
    /**
     * Average observed inter-packet interval in milliseconds.
     */
    avgMs?: string;
    /**
     * From how long ago in the past these intervals were observed.
     */
    duration?: PacketIntervalsDurationEnum;
    /**
     * Maximum observed inter-packet interval in milliseconds.
     */
    maxMs?: string;
    /**
     * Minimum observed inter-packet interval in milliseconds.
     */
    minMs?: string;
    /**
     * Number of inter-packet intervals from which these statistics were derived.
     */
    numIntervals?: string;
    /**
     * The type of packets for which inter-packet intervals were computed.
     */
    type?: PacketIntervalsTypeEnum;
}
