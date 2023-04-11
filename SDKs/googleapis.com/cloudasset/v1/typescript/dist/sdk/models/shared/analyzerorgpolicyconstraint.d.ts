import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Constraint } from "./googlecloudassetv1constraint";
import { GoogleCloudAssetV1CustomConstraint } from "./googlecloudassetv1customconstraint";
/**
 * The organization policy constraint definition.
 */
export declare class AnalyzerOrgPolicyConstraint extends SpeakeasyBase {
    /**
     * The definition of a custom constraint.
     */
    customConstraint?: GoogleCloudAssetV1CustomConstraint;
    /**
     * The definition of a constraint.
     */
    googleDefinedConstraint?: GoogleCloudAssetV1Constraint;
}
