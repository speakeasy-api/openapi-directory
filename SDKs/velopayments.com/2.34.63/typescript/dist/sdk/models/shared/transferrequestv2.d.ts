import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Body
 */
export declare class TransferRequestV2 extends SpeakeasyBase {
    /**
     * Amount to transfer, in minor units
     */
    amount: number;
    currency: string;
    /**
     * The 'to' source account id, which will be credited
     */
    toSourceAccountId: string;
}
