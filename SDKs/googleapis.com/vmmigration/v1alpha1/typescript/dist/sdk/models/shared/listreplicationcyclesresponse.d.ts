import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";
/**
 * Response message for 'ListReplicationCycles' request.
 */
export declare class ListReplicationCyclesResponse extends SpeakeasyBase {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. The list of replication cycles response.
     */
    replicationCycles?: ReplicationCycle[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
