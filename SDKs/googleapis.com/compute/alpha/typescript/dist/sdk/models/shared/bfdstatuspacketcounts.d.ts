import { SpeakeasyBase } from "../../../internal/utils";
export declare class BfdStatusPacketCounts extends SpeakeasyBase {
    /**
     * Number of packets received since the beginning of the current BFD session.
     */
    numRx?: number;
    /**
     * Number of packets received that were rejected because of errors since the beginning of the current BFD session.
     */
    numRxRejected?: number;
    /**
     * Number of packets received that were successfully processed since the beginning of the current BFD session.
     */
    numRxSuccessful?: number;
    /**
     * Number of packets transmitted since the beginning of the current BFD session.
     */
    numTx?: number;
}
