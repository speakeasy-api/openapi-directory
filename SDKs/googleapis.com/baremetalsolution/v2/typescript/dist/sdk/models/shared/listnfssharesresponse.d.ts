import { SpeakeasyBase } from "../../../internal/utils";
import { NfsShare } from "./nfsshare";
/**
 * Response message containing the list of NFS shares.
 */
export declare class ListNfsSharesResponse extends SpeakeasyBase {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * The list of NFS shares.
     */
    nfsShares?: NfsShare[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
