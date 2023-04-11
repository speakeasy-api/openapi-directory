import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * ListSnapshotsResponse is the result of ListSnapshotsRequest.
 */
export declare class ListSnapshotsResponse extends SpeakeasyBase {
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of snapshots in the project for the specified instance.
     */
    snapshots?: Snapshot[];
}
