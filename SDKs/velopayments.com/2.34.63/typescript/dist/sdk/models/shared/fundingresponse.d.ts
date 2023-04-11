import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Funding response
 */
export declare class FundingResponse extends SpeakeasyBase {
    allocationDate: Date;
    /**
     * Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL
     */
    allocationType?: string;
    amount: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency: string;
    detectedFundingRef?: string;
    /**
     * Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE
     */
    fundingAccountType: string;
    fundingId: string;
    hiddenDate?: Date;
    payorId: string;
    physicalAccountName?: string;
    reason?: string;
    sourceAccountId?: string;
    /**
     * Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER
     */
    status: string;
    text?: string;
}
