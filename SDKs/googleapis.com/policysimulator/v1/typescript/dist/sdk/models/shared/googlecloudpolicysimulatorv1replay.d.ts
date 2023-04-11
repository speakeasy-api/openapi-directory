import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ReplayConfig } from "./googlecloudpolicysimulatorv1replayconfig";
import { GoogleCloudPolicysimulatorV1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1replayresultssummary";
/**
 * A resource describing a `Replay`, or simulation.
 */
export declare class GoogleCloudPolicysimulatorV1ReplayInput extends SpeakeasyBase {
    /**
     * The configuration used for a Replay.
     */
    config?: GoogleCloudPolicysimulatorV1ReplayConfig;
    /**
     * Summary statistics about the replayed log entries.
     */
    resultsSummary?: GoogleCloudPolicysimulatorV1ReplayResultsSummary;
}
