import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional details about `WALLET` type payments. Contains only non-confidential information.
 */
export declare class DigitalWalletDetails extends SpeakeasyBase {
    /**
     * The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or
     *
     * @remarks
     * `FAILED`.
     */
    status?: string;
}
