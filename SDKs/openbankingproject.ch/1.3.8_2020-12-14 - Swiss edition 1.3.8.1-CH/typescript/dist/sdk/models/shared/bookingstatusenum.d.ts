/**
 * Permitted codes are
 *
 * @remarks
 *   * "information",
 *   * "booked",
 *   * "pending", and
 *   * "both"
 * "booked" shall be supported by the ASPSP.
 * To support the "pending" and "both" feature is optional for the ASPSP,
 * Error code if not supported in the online banking frontend
 *
 */
export declare enum BookingStatusEnum {
    Information = "information",
    Booked = "booked",
    Pending = "pending",
    Both = "both"
}
