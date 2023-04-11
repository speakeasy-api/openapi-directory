import { SpeakeasyBase } from "../../../internal/utils";
export declare class SourceAccountV3 extends SpeakeasyBase {
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency: string;
    /**
     * The id of the payout
     */
    sourceAccountId: string;
    /**
     * The name of the source account as referencec in the payout
     */
    sourceAccountName: string;
    /**
     * The total amount (in mnor units) that will be debited from the source account for the payout
     */
    totalPayoutCost: number;
}
