import { SpeakeasyBase } from "../../../internal/utils";
import { FutureReservationStatusSpecificSKUProperties } from "./futurereservationstatusspecificskuproperties";
/**
 * Current state of this Future Reservation
 */
export declare enum FutureReservationStatusProcurementStatusEnum {
    Approved = "APPROVED",
    Cancelled = "CANCELLED",
    Committed = "COMMITTED",
    Declined = "DECLINED",
    Drafting = "DRAFTING",
    Failed = "FAILED",
    FailedPartiallyFulfilled = "FAILED_PARTIALLY_FULFILLED",
    Fulfilled = "FULFILLED",
    PendingApproval = "PENDING_APPROVAL",
    ProcurementStatusUnspecified = "PROCUREMENT_STATUS_UNSPECIFIED",
    Procuring = "PROCURING",
    Provisioning = "PROVISIONING"
}
/**
 * [Output only] Represents status related to the future reservation.
 */
export declare class FutureReservationStatus extends SpeakeasyBase {
    /**
     * Fully qualified urls of the automatically created reservations at start_time.
     */
    autoCreatedReservations?: string[];
    /**
     * This count indicates the fulfilled capacity so far. This is set during "PROVISIONING" state. This count also includes capacity delivered as part of existing matching reservations.
     */
    fulfilledCount?: string;
    /**
     * Time when Future Reservation would become LOCKED, after which no modifications to Future Reservation will be allowed. Applicable only after the Future Reservation is in the APPROVED state. The lock_time is an RFC3339 string. The procurement_status will transition to PROCURING state at this time.
     */
    lockTime?: string;
    /**
     * Current state of this Future Reservation
     */
    procurementStatus?: FutureReservationStatusProcurementStatusEnum;
    /**
     * Properties to be set for the Future Reservation.
     */
    specificSkuProperties?: FutureReservationStatusSpecificSKUProperties;
}
