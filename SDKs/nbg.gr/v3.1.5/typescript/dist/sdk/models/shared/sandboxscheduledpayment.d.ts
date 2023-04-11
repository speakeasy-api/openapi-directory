import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scheduled payment information
 */
export declare class SandboxScheduledPayment extends SpeakeasyBase {
    /**
     * Amount
     */
    amount?: number;
    /**
     * Scheduled payment's short description
     */
    description?: string;
    /**
     * Scheduled payment's execution date
     */
    executionDate?: Date;
    /**
     * Debtor / Sender reference
     */
    senderReference?: string;
}
