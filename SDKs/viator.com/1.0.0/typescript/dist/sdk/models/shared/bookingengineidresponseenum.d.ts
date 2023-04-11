/**
 * [booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
 *
 * @remarks
 *
 * *one of* the following:
 * - `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately
 * - `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
 * - `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
 *
 */
export declare enum BookingEngineIdResponseEnum {
    Uf = "UF",
    Or = "OR",
    Fo = "FO"
}
