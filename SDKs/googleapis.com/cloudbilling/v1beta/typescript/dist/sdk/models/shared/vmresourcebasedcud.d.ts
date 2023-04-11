import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";
/**
 * Commitment usage plan.
 */
export declare enum VmResourceBasedCudPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    TwelveMonth = "TWELVE_MONTH",
    ThirtySixMonth = "THIRTY_SIX_MONTH"
}
/**
 * Specifies a resource-based committed use discount (CUD).
 */
export declare class VmResourceBasedCud extends SpeakeasyBase {
    /**
     * Specification of a set of guest accelerators attached to a machine.
     */
    guestAccelerator?: GuestAccelerator;
    /**
     * The machine series for CUD. For example: "n1" for general purpose N1 machine type commitments. "n2" for general purpose N2 machine type commitments. "e2" for general purpose E2 machine type commitments. "n2d" for general purpose N2D machine type commitments. "t2d" for general purpose T2D machine type commitments. "c2"/"c2d" for compute-optimized commitments. "m1"/"m2" for the memory-optimized commitments. "a2' for the accelerator-optimized commitments.
     */
    machineSeries?: string;
    /**
     * Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB).
     */
    memorySizeGb?: number;
    /**
     * Commitment usage plan.
     */
    plan?: VmResourceBasedCudPlanEnum;
    /**
     * The region where the VM runs. For example: "us-central1"
     */
    region?: string;
    /**
     * The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd.
     */
    virtualCpuCount?: string;
}
