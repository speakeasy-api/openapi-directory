import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * A third party list snapshots response.
 */
export declare class SnapshotListResponse extends SpeakeasyBase {
    /**
     * The snapshots.
     */
    items?: Snapshot[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results. If there are no more results, the token is omitted.
     */
    nextPageToken?: string;
}
