import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ReplayResult } from "./googlecloudpolicysimulatorv1replayresult";
/**
 * Response message for Simulator.ListReplayResults.
 */
export declare class GoogleCloudPolicysimulatorV1ListReplayResultsResponse extends SpeakeasyBase {
    /**
     * A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The results of running a Replay.
     */
    replayResults?: GoogleCloudPolicysimulatorV1ReplayResult[];
}
