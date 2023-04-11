import { SpeakeasyBase } from "../../../internal/utils";
/**
 * FX details relating to a payout that was executed or is still waiting to be executed
 */
export declare class PostInstructFxInfo extends SpeakeasyBase {
    /**
     * The mode by which the FX rate is to be determined (MANUAL or AUTO)
     */
    fxMode: string;
    /**
     * The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)
     */
    fxStatus: string;
    /**
     * The date-time at which the most recent fxStatus was determined.
     */
    fxStatusUpdatedAt: Date;
    /**
     * The reference assigned to the FX funding that will fulfil this payment.
     */
    fxTransactionReference?: string;
}
