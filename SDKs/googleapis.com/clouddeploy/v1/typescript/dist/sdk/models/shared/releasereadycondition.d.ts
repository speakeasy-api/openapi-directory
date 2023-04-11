import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.
 */
export declare class ReleaseReadyCondition extends SpeakeasyBase {
    /**
     * True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release.
     */
    status?: boolean;
}
