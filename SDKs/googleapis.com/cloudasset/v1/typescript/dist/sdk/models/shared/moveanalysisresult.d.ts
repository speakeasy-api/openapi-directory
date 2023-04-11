import { SpeakeasyBase } from "../../../internal/utils";
import { MoveImpact } from "./moveimpact";
/**
 * An analysis result including blockers and warnings.
 */
export declare class MoveAnalysisResult extends SpeakeasyBase {
    /**
     * Blocking information that would prevent the target resource from moving to the specified destination at runtime.
     */
    blockers?: MoveImpact[];
    /**
     * Warning information indicating that moving the target resource to the specified destination might be unsafe. This can include important policy information and configuration changes, but will not block moves at runtime.
     */
    warnings?: MoveImpact[];
}
