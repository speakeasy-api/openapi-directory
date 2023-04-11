import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeRestore } from "./volumerestore";
/**
 * Response message for ListVolumeRestores.
 */
export declare class ListVolumeRestoresResponse extends SpeakeasyBase {
    /**
     * A token which may be sent as page_token in a subsequent `ListVolumeRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The list of VolumeRestores matching the given criteria.
     */
    volumeRestores?: VolumeRestore[];
}
