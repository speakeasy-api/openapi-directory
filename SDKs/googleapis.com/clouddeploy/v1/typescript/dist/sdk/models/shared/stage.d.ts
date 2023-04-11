import { SpeakeasyBase } from "../../../internal/utils";
import { Strategy } from "./strategy";
/**
 * Stage specifies a location to which to deploy.
 */
export declare class Stage extends SpeakeasyBase {
    /**
     * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
     */
    profiles?: string[];
    /**
     * Strategy contains deployment strategy information.
     */
    strategy?: Strategy;
    /**
     * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
     */
    targetId?: string;
}
