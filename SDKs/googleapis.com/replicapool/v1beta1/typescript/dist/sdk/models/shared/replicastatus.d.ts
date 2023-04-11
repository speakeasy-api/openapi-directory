import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current status of a Replica.
 */
export declare class ReplicaStatus extends SpeakeasyBase {
    /**
     * [Output Only] Human-readable details about the current state of the replica
     */
    details?: string;
    /**
     * [Output Only] The state of the Replica.
     */
    state?: string;
    /**
     * [Output Only] The template used to build the replica.
     */
    templateVersion?: string;
    /**
     * [Output Only] Link to the virtual machine that this Replica represents.
     */
    vmLink?: string;
    /**
     * [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.
     */
    vmStartTime?: string;
}
