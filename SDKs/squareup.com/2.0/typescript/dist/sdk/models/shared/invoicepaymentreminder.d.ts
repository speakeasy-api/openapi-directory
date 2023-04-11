import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a payment request reminder (automatic notification) that Square sends
 *
 * @remarks
 * to the customer. You configure a reminder relative to the payment request
 * `due_date`.
 */
export declare class InvoicePaymentReminder extends SpeakeasyBase {
    /**
     * The reminder message.
     */
    message?: string;
    /**
     * The number of days before (a negative number) or after (a positive number)
     *
     * @remarks
     * the payment request `due_date` when the reminder is sent. For example, -3 indicates that
     * the reminder should be sent 3 days before the payment request `due_date`.
     */
    relativeScheduledDays?: number;
    /**
     * If sent, the timestamp when the reminder was sent, in RFC 3339 format.
     */
    sentAt?: string;
    /**
     * The status of the reminder.
     */
    status?: string;
    /**
     * A Square-assigned ID that uniquely identifies the reminder within the
     *
     * @remarks
     * `InvoicePaymentRequest`.
     */
    uid?: string;
}
