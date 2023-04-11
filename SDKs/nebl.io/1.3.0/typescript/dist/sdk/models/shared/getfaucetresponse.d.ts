import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFaucetResponseData extends SpeakeasyBase {
    /**
     * TXID of a successful withdrawal
     */
    txId?: string;
}
/**
 * Object containing the transaction ID of the withdrawal.
 */
export declare class GetFaucetResponse extends SpeakeasyBase {
    data?: GetFaucetResponseData;
    /**
     * Whether the withdrawal was successful
     */
    status?: string;
}
