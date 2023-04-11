import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxBankAccountInfo } from "./sandboxbankaccountinfo";
import { SandboxBeneficiary } from "./sandboxbeneficiary";
import { SandboxParty } from "./sandboxparty";
import { SandboxScheduledPayment } from "./sandboxscheduledpayment";
import { SandboxStandingOrder } from "./sandboxstandingorder";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";
/**
 * Sandbox bank account
 */
export declare class SandboxBankAccount extends SpeakeasyBase {
    /**
     * List of account's beneficiaries
     */
    beneficiaries?: SandboxBeneficiary[];
    /**
     * General account information
     */
    info?: SandboxBankAccountInfo;
    /**
     * Connected party information
     */
    party?: SandboxParty;
    /**
     * List of account's scheduled payments
     */
    scheduledPayments?: SandboxScheduledPayment[];
    /**
     * List of account's standing orders
     */
    standingOrders?: SandboxStandingOrder[];
    /**
     * List of account's statements
     */
    statements?: SandboxStatement[];
    /**
     * List of account's transactions
     */
    transactions?: SandboxTransaction[];
}
