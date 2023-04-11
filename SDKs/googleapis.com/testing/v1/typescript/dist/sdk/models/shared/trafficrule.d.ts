import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network emulation parameters.
 */
export declare class TrafficRule extends SpeakeasyBase {
    /**
     * Bandwidth in kbits/second.
     */
    bandwidth?: number;
    /**
     * Burst size in kbits.
     */
    burst?: number;
    /**
     * Packet delay, must be >= 0.
     */
    delay?: string;
    /**
     * Packet duplication ratio (0.0 - 1.0).
     */
    packetDuplicationRatio?: number;
    /**
     * Packet loss ratio (0.0 - 1.0).
     */
    packetLossRatio?: number;
}
