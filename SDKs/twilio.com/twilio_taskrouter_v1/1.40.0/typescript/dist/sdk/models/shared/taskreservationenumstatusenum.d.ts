/**
 * Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
 */
export declare enum TaskReservationEnumStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Rejected = "rejected",
    Timeout = "timeout",
    Canceled = "canceled",
    Rescinded = "rescinded",
    Wrapping = "wrapping",
    Completed = "completed"
}
