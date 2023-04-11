import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLabelChangeDetail } from "./appliedlabelchangedetail";
/**
 * Label changes that were made on the Target.
 */
export declare class AppliedLabelChange extends SpeakeasyBase {
    /**
     * Changes that were made to the Label on the Target.
     */
    changes?: AppliedLabelChangeDetail[];
}
