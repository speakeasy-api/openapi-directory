import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object used by `ApproveRollout`.
 */
export declare class ApproveRolloutRequest extends SpeakeasyBase {
    /**
     * Required. True = approve; false = reject
     */
    approved?: boolean;
}
