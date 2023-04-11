import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeBackup } from "./volumebackup";
/**
 * Response message for ListVolumeBackups.
 */
export declare class ListVolumeBackupsResponse extends SpeakeasyBase {
    /**
     * A token which may be sent as page_token in a subsequent `ListVolumeBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The list of VolumeBackups matching the given criteria.
     */
    volumeBackups?: VolumeBackup[];
}
