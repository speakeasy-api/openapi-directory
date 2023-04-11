import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeSnapshot } from "./volumesnapshot";
/**
 * Response message containing the list of volume snapshots.
 */
export declare class ListVolumeSnapshotsResponse extends SpeakeasyBase {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
    /**
     * The list of snapshots.
     */
    volumeSnapshots?: VolumeSnapshot[];
}
