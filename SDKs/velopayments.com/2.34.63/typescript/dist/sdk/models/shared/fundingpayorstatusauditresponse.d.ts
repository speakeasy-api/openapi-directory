import { SpeakeasyBase } from "../../../internal/utils";
export declare class FundingPayorStatusAuditResponse extends SpeakeasyBase {
    amount?: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency?: string;
    fundingId?: string;
    status?: string;
}
