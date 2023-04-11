import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityCommitment } from "./capacitycommitment";
/**
 * The response for ReservationService.SplitCapacityCommitment.
 */
export declare class SplitCapacityCommitmentResponse extends SpeakeasyBase {
    /**
     * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
     */
    first?: CapacityCommitment;
    /**
     * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
     */
    second?: CapacityCommitment;
}
