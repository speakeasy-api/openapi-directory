import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancellationReason extends SpeakeasyBase {
    /**
     * Machine-interpretable identification code for this cancellation
     */
    cancellationReasonCode?: string;
    /**
     * Natural-language description of this cancellation reason
     */
    cancellationReasonText?: string;
}
