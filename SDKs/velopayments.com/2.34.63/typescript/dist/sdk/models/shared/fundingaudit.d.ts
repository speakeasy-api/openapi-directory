import { SpeakeasyBase } from "../../../internal/utils";
import { FundingEvent } from "./fundingevent";
export declare class FundingAudit extends SpeakeasyBase {
    /**
     * The amount funded
     */
    amount?: number;
    /**
     * The currency of the funding
     */
    currency?: string;
    dateTime?: Date;
    events?: FundingEvent[];
    fundingAccountName?: string;
    /**
     * Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER
     */
    fundingType?: string;
    sourceAccountName?: string;
    /**
     * Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT
     */
    status?: string;
    /**
     * Type of top up. One of the following values: AUTOMATIC, MANUAL
     */
    topupType?: string;
}
