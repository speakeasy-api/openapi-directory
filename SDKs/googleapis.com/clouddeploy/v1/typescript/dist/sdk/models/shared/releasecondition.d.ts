import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseReadyCondition } from "./releasereadycondition";
import { SkaffoldSupportedCondition } from "./skaffoldsupportedcondition";
/**
 * ReleaseCondition contains all conditions relevant to a Release.
 */
export declare class ReleaseCondition extends SpeakeasyBase {
    /**
     * ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.
     */
    releaseReadyCondition?: ReleaseReadyCondition;
    /**
     * SkaffoldSupportedCondition contains information about when support for the release's version of skaffold ends.
     */
    skaffoldSupportedCondition?: SkaffoldSupportedCondition;
}
