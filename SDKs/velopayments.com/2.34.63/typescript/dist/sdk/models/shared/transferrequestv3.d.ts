import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Body
 */
export declare class TransferRequestV3 extends SpeakeasyBase {
    /**
     * Amount to transfer, in minor units
     */
    amount: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency: string;
    /**
     * The 'to' source account id, which will be credited
     */
    toSourceAccountId: string;
}
