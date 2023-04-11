import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **Metering**: Per-Membership Feature State.
 */
export declare class MeteringMembershipState extends SpeakeasyBase {
    /**
     * The time stamp of the most recent measurement of the number of vCPUs in the cluster.
     */
    lastMeasurementTime?: string;
    /**
     * The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision).
     */
    preciseLastMeasuredClusterVcpuCapacity?: number;
}
