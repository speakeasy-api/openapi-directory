import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional instruct payout parameters
 */
export declare class InstructPayoutRequestV3 extends SpeakeasyBase {
    /**
     * Halt instruction if the FX rates have become worse since the last quote
     */
    fxRateDegredationThresholdPercentage?: number;
}
